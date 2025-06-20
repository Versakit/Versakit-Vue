import { program } from 'commander'
import './commands/clone.js'

const initializeCommands = () => {
  // 最后解析参数
  program.parse(process.argv)
}

// 初始化所有命令
initializeCommands()
