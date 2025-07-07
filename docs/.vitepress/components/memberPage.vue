<script lang="ts" setup>
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/74483049?v=4',
    name: 'lenran659',
    title: '核心开发者',
    links: [{ icon: 'github', link: 'https://github.com/lenran659' }],
  },
]

const contributors = [
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/74483049?v=4',
    contributions: 703,
    login: 'lenran659',
    html_url: 'https://github.com/lenran659',
  },
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/131731035?v=4',
    contributions: 82,
    login: 'Dream-2022',
    html_url: 'https://github.com/Dream-2022',
  },
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/116160870?v=4',
    contributions: 58,
    login: 'ZRMYDYCG',
    html_url: 'https://github.com/ZRMYDYCG',
  },
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/128499037?v=4',
    contributions: 37,
    login: 'ZHuuO',
    html_url: 'https://github.com/ZHuuO',
  },
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/122306263?v=4',
    contributions: 13,
    login: 'Simonmie',
    html_url: 'https://github.com/Simonmie',
  },
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/86543671?v=4',
    contributions: 6,
    login: 'abining',
    html_url: 'https://github.com/abining',
  },
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/126545033?v=4',
    contributions: 5,
    login: 'dhj-l',
    html_url: 'https://github.com/dhj-l',
  },
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/47586954?v=4',
    contributions: 2,
    login: 'yyz945947732',
    html_url: 'https://github.com/yyz945947732',
  },
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/184910937?v=4',
    contributions: 1,
    login: 'StriveToLearnCode',
    html_url: 'https://github.com/StriveToLearnCode',
  },
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/58333667?v=4',
    contributions: 1,
    login: 'yuguaa',
    html_url: 'https://github.com/yuguaa',
  },
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/85224021?v=4',
    contributions: 1,
    login: 'xiaotanqingjiao',
    html_url: 'https://github.com/xiaotanqingjiao',
  },
]

const handleClick = (link: string) => {
  window.open(link)
}
</script>

<template>
  <div class="member-container">
    <VPTeamPage>
      <VPTeamPageTitle class="member-title">
        <template #title>团队成员</template>
        <template #lead>我们是一群热爱开源的人。</template>
      </VPTeamPageTitle>

      <VPTeamMembers class="member-content" size="small" :members="members" />
    </VPTeamPage>

    <VPTeamPage>
      <VPTeamPageTitle class="member-title">
        <template #title>贡献者</template>
        <template #lead>
          感谢每一位贡献者的支持与贡献！你们的每一次提交，都是推动 Versakit UI
          进步的动力 💖
        </template>
      </VPTeamPageTitle>
      <div class="contributors">
        <div
          class="contributor"
          v-for="member in contributors"
          :key="member.login"
          @click="handleClick(member.html_url)"
        >
          <img
            class="contributor-avatar"
            :src="member.avatar_url"
            alt="avatar"
          />
          {{ member.login }}
        </div>
      </div>
    </VPTeamPage>
  </div>
</template>

<style scoped>
.member-container {
  padding-bottom: 100px;
}

.member-title,
.member-content,
.contributors {
  user-select: none;
}

.contributors {
  max-width: 60%;
  display: flex;
  justify-content: center;
  margin: 24px auto;
  flex-wrap: wrap;
}

.contributor {
  cursor: pointer;
  margin-bottom: 12px;
  font-size: 12px;
  color: var(--vp-c-text-2);
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 120px;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  border-radius: 6px;
  padding: 5px;
}

.contributor:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.contributor-avatar {
  border-radius: 50%;
  width: 60px;
  display: block;
  margin: 0 auto;
}
</style>
