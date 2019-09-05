<template>
  <BaseLayout>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </BaseLayout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import BaseLayout from "@/layout/baseLayout.vue";

@Component({
  components: {
    BaseLayout,
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
