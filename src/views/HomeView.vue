<template>
  <div class="home">
    {{ a }}
    <n-icon size="40">
      <game-controller-outline />
    </n-icon>
    <n-button type="success"> Success </n-button>
    <img alt="Vue logo" src="../assets/logo.png" />
    22222 333
    <HelloWorld />
  </div>
</template>

<script lang="ts" setup>
import { GameControllerOutline } from "@vicons/ionicons5";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
const a = ref(111111);
onRenderTriggered(() => {
  console.log(11111);
  debugger;
});
</script>
