<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Provides } from "./provides/index";

export default {
  setup() {
    Provides();
  },
};
</script>
<style>
@import "./assets/styles/slifer-style.css";
</style>
