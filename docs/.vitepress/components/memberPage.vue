<script lang="ts" setup>
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme'

const contributors = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/74483049?v=4',
    name: 'lenran659',
    link: 'https://github.com/lenran659',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/131731035?v=4',
    name: 'Dream-2022',
    link: 'https://github.com/Dream-2022',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/128499037?v=4',
    name: 'ZHuuO',
    link: 'https://github.com/ZHuuO',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/116160870?v=4',
    name: 'ZRMYDYCG',
    link: 'https://github.com/ZRMYDYCG',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/122306263?v=4',
    name: 'Simonmie',
    link: 'https://github.com/Simonmie',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/86543671?v=4',
    name: 'abining',
    link: 'https://github.com/abining',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/47586954?v=4',
    name: 'yyz945947732',
    link: 'https://github.com/yyz945947732',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/184910937?v=4',
    name: 'StriveToLearnCode',
    link: 'https://github.com/StriveToLearnCode',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/58333667?v=4',
    name: 'yuguaa',
    link: 'https://github.com/yuguaa',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/85224021?v=4',
    name: 'xiaotanqingjiao',
    link: 'https://github.com/xiaotanqingjiao',
  },
]

const members = [
  {
    avatar:
      'https://avatars.githubusercontent.com/u/74483049?s=400&u=102dfac48d0067d9d7a5576134e409590bbfaafe&v=4',
    name: 'Jannik',
    title: 'Creator',
    links: [{ icon: 'github', link: 'https://github.com/lenran659' }],
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/131731035?v=4',
    name: 'Pei',
    title: 'UI Designer | Developer',
    links: [{ icon: 'github', link: 'https://github.com/Dream-2022' }],
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/122306263?v=4',
    name: 'JustHappy',
    title: 'Developer',
    links: [{ icon: 'github', link: 'https://github.com/Simonmie' }],
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/128499037?v=4',
    name: 'ZHuuO',
    title: 'Developer',
    links: [{ icon: 'github', link: 'https://github.com/ZHuuO' }],
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/184910937?v=4',
    name: 'StriveToLearnCode',
    title: 'Developer',
    links: [{ icon: 'github', link: 'https://github.com/StriveToLearnCode' }],
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/180088207?v=4',
    name: 'Fofow',
    title: 'Developer',
    links: [{ icon: 'github', link: 'https://github.com/Natorx' }],
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/86543671?v=4',
    name: 'abining',
    title: 'Developer',
    links: [{ icon: 'github', link: 'https://github.com/abining' }],
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
          :key="member.name"
          @click="handleClick(member.link)"
        >
          <img class="contributor-avatar" :src="member.avatar" alt="avatar" />
          {{ member.name }}
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
