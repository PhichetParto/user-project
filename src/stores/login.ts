import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useLoginStore = defineStore("login", () => {
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

  return { loginname, isLogin, login, logout, loadData };
});
