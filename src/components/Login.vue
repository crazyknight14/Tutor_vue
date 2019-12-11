<template>
<v-app>
  <v-container>
    <v-layout row class="text-xs-center" justify-center align-center>
      <v-flex xs4 text-xs-center>
        <v-container class="text-xs-center" justify-center align-center>
          <v-card flat text-xs-center>
            <v-card-title primary-title text-xs-center >
              <h1><strong>Login</strong></h1>
            </v-card-title>
            <v-form class="login" @submit.prevent="login">
            <v-text-field name="Email" label=" Email" v-model="email" required></v-text-field>
            <v-text-field name="Password" label=" Password" type="password" v-model="password" required></v-text-field>
            <v-card-actions>
              <v-btn primary color=#2C3A47 dark type="submit">Login</v-btn>
              <v-btn primary color=#2C3A47 to='/registeruser' dark>Register</v-btn>
            </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</v-app>
</template>

<script>
export default {
  data () {
    return {
      email:'',
      password:''
    };
  },
//   methods: {
//     login: function() {
//       let email = this.email;
//       let password = this.password;
//       this.$store
//         .dispatch("login", { email, password })
//         .then(() => this.$router.push("/"))
//         .catch(err => console.log(err));
//     }
    //}
};
</script>

<style scoped>


</style>