<script setup lang="ts">
import { Avatar } from '@versakit/vue'
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <Avatar
        src="https://randomuser.me/api/portraits/men/1.jpg"
        alt="用户头像"
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同尺寸</h2>
      <div class="flex items-center gap-4">
        <div>
          <p class="mb-2">超小尺寸</p>
          <Avatar
            src="https://randomuser.me/api/portraits/men/2.jpg"
            size="xs"
          />
        </div>
        <div>
          <p class="mb-2">小尺寸</p>
          <Avatar
            src="https://randomuser.me/api/portraits/men/2.jpg"
            size="sm"
          />
        </div>
        <div>
          <p class="mb-2">中等尺寸</p>
          <Avatar
            src="https://randomuser.me/api/portraits/men/2.jpg"
            size="md"
          />
        </div>
        <div>
          <p class="mb-2">大尺寸</p>
          <Avatar
            src="https://randomuser.me/api/portraits/men/2.jpg"
            size="lg"
          />
        </div>
        <div>
          <p class="mb-2">超大尺寸</p>
          <Avatar
            src="https://randomuser.me/api/portraits/men/2.jpg"
            size="xl"
          />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同形状</h2>
      <div class="flex items-center gap-4">
        <div>
          <p class="mb-2">圆形</p>
          <Avatar
            src="https://randomuser.me/api/portraits/women/3.jpg"
            shape="circle"
          />
        </div>
        <div>
          <p class="mb-2">方形</p>
          <Avatar
            src="https://randomuser.me/api/portraits/women/3.jpg"
            shape="square"
          />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">带状态</h2>
      <div class="flex items-center gap-4">
        <div>
          <p class="mb-2">在线</p>
          <Avatar
            src="https://randomuser.me/api/portraits/men/4.jpg"
            status="online"
          />
        </div>
        <div>
          <p class="mb-2">离线</p>
          <Avatar
            src="https://randomuser.me/api/portraits/men/4.jpg"
            status="offline"
          />
        </div>
        <div>
          <p class="mb-2">离开</p>
          <Avatar
            src="https://randomuser.me/api/portraits/men/4.jpg"
            status="away"
          />
        </div>
        <div>
          <p class="mb-2">忙碌</p>
          <Avatar
            src="https://randomuser.me/api/portraits/men/4.jpg"
            status="busy"
          />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">加载失败时的文本</h2>
      <div class="flex items-center gap-4">
        <Avatar src="invalid-image-url.jpg" fallback="JD" />
        <Avatar src="invalid-image-url.jpg" fallback="ZS" />
        <Avatar src="invalid-image-url.jpg" fallback="WW" />
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <div class="flex items-center gap-4">
        <Avatar
          src="https://randomuser.me/api/portraits/women/5.jpg"
          :pt="{
            root: 'border-2 border-purple-500',
            image: 'grayscale',
          }"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/women/6.jpg"
          :pt="{
            root: 'border-2 border-green-500 shadow-lg',
          }"
        />
        <Avatar
          src="invalid-image-url.jpg"
          fallback="PT"
          :pt="{
            fallback: 'bg-purple-500 text-white',
          }"
        />
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div class="flex items-center gap-4">
        <Avatar
          src="https://randomuser.me/api/portraits/men/6.jpg"
          unstyled
          :pt="{
            root: 'w-16 h-16 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500',
            image: 'w-full h-full object-cover',
          }"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/men/7.jpg"
          unstyled
          :pt="{
            root: 'w-16 h-16 rounded-md overflow-hidden shadow-lg',
            image: 'w-full h-full object-cover',
          }"
        />
        <Avatar
          src="invalid-image-url.jpg"
          fallback="VS"
          unstyled
          :pt="{
            root: 'w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center',
            fallback: 'text-white text-xl font-bold',
          }"
        />
      </div>
    </section>
  </div>
</template>
