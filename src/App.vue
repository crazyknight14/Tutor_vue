<template>
  <v-app>
    <v-toolbar app color=#16a085 dense dark>
      <v-toolbar-title class="headline text-uppercase">
        <span>TutorLite</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-btn dark color='#2C3A47' flat round to='/home'>
          <span class="mr-1">Home</span>
        </v-btn>
     
      <v-btn dark color='#2C3A47' round to="/tutor">
        <span class="mr-1">Tutor Registration</span>
      </v-btn>
      
        <v-btn dark color='#2C3A47' round to='/student'>
          <span class="mr-1">Student Registration</span>
        </v-btn>
      
      <!-- <span v-if="isLoggedIn"> <v-btn dark color="#007a94" class="logout" @click="logout">Logout</v-btn></span>
      <router-link to='/login'><v-btn dark color="#0">Login</v-btn></router-link> -->
    </v-toolbar>
      <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    
  }),
};
</script>

<style >
#app {
  background-color: white;
}
</style>
