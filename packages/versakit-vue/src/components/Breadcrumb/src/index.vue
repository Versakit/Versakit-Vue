<script setup lang="ts">
import Breadcrumb from './breadcrumb.vue'
</script>

<template>
  <Breadcrumb v-bind="$attrs">
    <template v-for="(_, slot) in $slots" #[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </Breadcrumb>
</template>
