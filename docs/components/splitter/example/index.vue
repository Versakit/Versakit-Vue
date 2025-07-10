<template>
  <div style="height: 500px; width: 100%">
    <Splitter
      :gutterSize="6"
      :minSize="[15, 30]"
      collapsible
      stateful
      stateKey="my-app-splitter"
      @resize="onResize"
    >
      <SplitterPane :size="20" collapsible>
        <div class="navigation-panel">
          <h3>导航</h3>
          <ul class="nav-list">
            <li>首页</li>
            <li>项目</li>
            <li>设置</li>
          </ul>
        </div>
      </SplitterPane>

      <SplitterPane>
        <Splitter layout="vertical">
          <SplitterPane :size="70">
            <div class="content-panel">
              <h3>内容区域</h3>
              <p>主要内容显示在这里</p>
            </div>
          </SplitterPane>

          <SplitterPane :size="30" collapsible>
            <div class="terminal-panel">
              <h3>终端</h3>
              <div class="terminal-content">$ npm start</div>
            </div>
          </SplitterPane>
        </Splitter>
      </SplitterPane>
    </Splitter>
  </div>
</template>

<script setup>
import { Splitter, SplitterPane } from '@versakit/vue'

const onResize = (sizes) => {
  console.log('面板尺寸变化:', sizes)
}
</script>

<style scoped>
.navigation-panel,
.content-panel,
.terminal-panel {
  height: 100%;
  padding: 1rem;
}

.navigation-panel {
  background-color: #f3f4f6;
}

.content-panel {
  background-color: #ffffff;
}

.terminal-panel {
  background-color: #1e1e1e;
  color: #f0f0f0;
}

.nav-list {
  margin-top: 1rem;
  list-style: none;
  padding: 0;
}

.nav-list li {
  padding: 0.5rem 0;
  cursor: pointer;
}

.terminal-content {
  font-family: monospace;
  padding: 0.5rem;
  background-color: #2d2d2d;
  border-radius: 0.25rem;
  margin-top: 1rem;
}
</style>
