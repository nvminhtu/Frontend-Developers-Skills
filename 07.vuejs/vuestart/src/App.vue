<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn class="mr-4" color="yellow"><router-link :to="{ name: 'Homepage'}">Homepage</router-link></v-btn>
      <v-btn class="mr-4" color="yellow"><router-link to="/quizzes">Quizzes</router-link></v-btn>
      <v-btn class="mr-4" color="yellow"><router-link to="/users">Users</router-link></v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    // not calling components
  },
  data: () => ({
    //
  }),
};
</script>

<style>
</style>