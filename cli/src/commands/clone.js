import { program } from 'commander'
import inquirer from 'inquirer'
import ora from 'ora'
import simpleGit from 'simple-git'

const REPO = 'Versakit/Versakit-Vue'
const GIT_URL = `https://github.com/${REPO}.git`

export const cloneAction = async (project) => {
  const spinner = ora('正在拉取仓库...').start()
  try {
    // 1. clone 默认分支
    const git = simpleGit()
    await git.clone(GIT_URL, project)
    spinner.succeed('仓库拉取完成')

    // 2. 获取所有分支（本地+远程）
    const projectGit = simpleGit(project)
    await projectGit.fetch() // 确保远程分支最新
    const branchSummary = await projectGit.branch(['-a'])
    // 只保留远程分支（去除 HEAD 和 origin/HEAD）
    const remoteBranches = branchSummary.all
      .filter((b) => b.startsWith('remotes/origin/') && !b.endsWith('HEAD'))
      .map((b) => b.replace('remotes/origin/', ''))

    // 3. 选择分支
    const { branch } = await inquirer.prompt([
      {
        type: 'list',
        name: 'branch',
        message: '请选择要切换到的分支',
        choices: remoteBranches,
      },
    ])
    await projectGit.checkout(branch)
    ora().succeed(`已切换到分支：${branch}`)
  } catch (e) {
    spinner.fail('操作失败')
    console.error(e)
  }
}

program
  .command('clone <project>')
  .description('拉取项目模板并选择分支')
  .action(cloneAction)
