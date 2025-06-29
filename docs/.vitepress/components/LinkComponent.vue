<script setup lang="ts">
defineProps({
  /**
   * 链接地址
   */
  link: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="bg-gray-100 rounded-md p-2 inline-block">
    <a
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center hover:text-gray-500 cursor-pointer"
    >
      <div class="flex justify-center items-center">
        <svg
          aria-hidden="true"
          fill="none"
          focusable="false"
          height="1em"
          viewBox="0 0 512 512"
          width="1em"
          class="text-lg text-[#ff4785]"
        >
          <g>
            <path
              d="M356.5,5.2L353.9,63c-0.1,3.2,3.7,5.2,6.3,3.2l22.6-17.1L401.9,64c2.5,1.7,5.8,0,6-3l-2.2-58.8l28.4-2.2   c14.7-1,27.3,10.8,27.3,25.6v460.8c0,14.7-12.3,26.3-26.9,25.6L91.1,496.6c-13.3-0.6-24.1-11.3-24.5-24.7l-16-422.3   c-0.8-14.2,9.9-26.3,24.1-27.1L356.2,4.7L356.5,5.2z M291,198.4c0,10,67.4,5.1,76.6-1.7c0-68.2-36.7-104.3-103.6-104.3   c-67.2,0-104.5,36.8-104.5,91.6c0,94.9,128,96.6,128,148.4c0,15-6.8,23.5-22.4,23.5c-20.5,0-28.8-10.4-27.7-46.1   c0-7.7-77.8-10.3-80.4,0c-5.7,86,47.6,110.9,108.7,110.9c59.6,0,106.1-31.7,106.1-89.1c0-101.7-130.1-99-130.1-149.3   c0-20.7,15.4-23.4,24.1-23.4c9.7,0,26.7,1.5,25.4,39.8L291,198.4z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
        <span class="text-gray-400 ml-2">Storybook</span>
      </div>
    </a>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
