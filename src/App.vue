<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import LoginView from "./views/LoginView.vue";
import MainView from "./views/MainView.vue";
const loginname = ref("");
const isLogin = computed(() => {
  return loginname.value !== "";
});
const login = (username: string): void => {
  loginname.value = username;
  localStorage.setItem("loginname", username);
};
const logout = () => {
  loginname.value = "";
  localStorage.removeItem("loginname");
};
const loadData = () => {
  loginname.value = localStorage.getItem("loginname") || "";
};
onMounted(() => {
  console.log("On Mounted");
  loadData();
});
</script>

<template>
  <LoginView v-if="!isLogin" @login="login"></LoginView>
  <MainView v-if="isLogin" @logout="logout"></MainView>
</template>

<style scoped></style>
