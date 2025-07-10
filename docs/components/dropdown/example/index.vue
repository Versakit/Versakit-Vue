<template>
  <Dropdown>
    <template #trigger>
      <Button>点击打开菜单</Button>
    </template>
    <DropdownItem value="option1">选项1</DropdownItem>
    <DropdownItem value="option2">选项2</DropdownItem>
    <DropdownDivider />
    <DropdownItem value="option3" disabled>禁用选项</DropdownItem>
  </Dropdown>
</template>

<script setup lang="ts">
import { Dropdown, DropdownItem } from '@versakit/vue'
import { Button } from '@versakit/vue'
</script>
