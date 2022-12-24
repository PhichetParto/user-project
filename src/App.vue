<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import LoginView from "./views/LoginView.vue";
import MainView from "./views/MainView.vue";
import { useLoginStore } from "@/stores/login";
const loginStore = useLoginStore();
onMounted(() => {
  console.log("On Mounted");
  loginStore.loadData();
});
</script>

<template>
  <LoginView v-if="!loginStore.isLogin"></LoginView>
  <MainView
    v-if="loginStore.isLogin"
    @logout="loginStore.logout"
    :loginname="loginStore.loginname"
  ></MainView>
</template>

<style scoped></style>
