<script setup lang="ts">
import { ref } from "vue";
import {
  mdiWeatherSunny,
  mdiWeatherNight,
  mdiFolder,
  mdiAccountMultiple,
  mdiStar,
} from "@mdi/js";
import { useLoginStore } from "@/stores/login";
const loginStore = useLoginStore();

const theme = ref("light");

function onClick() {
  theme.value = theme.value === "light" ? "dark" : "light";
}
const logout = () => {
  loginStore.logout();
};
</script>
<template>
  <v-app :theme="theme">
    <v-app-bar>
      <v-spacer></v-spacer>

      <v-btn
        :prepend-icon="theme === 'light' ? mdiWeatherSunny : mdiWeatherNight"
        @click="onClick"
        >Toggle Theme</v-btn
      >
      <v-btn @click="logout">logout</v-btn>
    </v-app-bar>
    <v-navigation-drawer expand-on-hover rail permanent>
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          :title="loginStore.loginname"
          subtitle="sandra_a88@gmailcom"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          :prepend-icon="mdiFolder"
          title="My Files"
          value="myfiles"
        ></v-list-item>
        <v-list-item
          :prepend-icon="mdiAccountMultiple"
          title="Shared with me"
          value="shared"
        ></v-list-item>
        <v-list-item
          :prepend-icon="mdiStar"
          title="Starred"
          value="starred"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
