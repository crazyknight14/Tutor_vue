<template>
    <v-app>
       <v-container fluid>
           <v-layout justify-start align-left>
               <v-flex sm6>
                   <h1>Tutor Registration</h1>
                   <h2>Please fill out the following fields</h2>
                   <v-form>
                       <v-input>
                            <v-text-field placeholder="Name"></v-text-field>
                       </v-input>
                       <v-input>
                           <v-text-field placeholder="Phone Number"></v-text-field>
                       </v-input>
                       <v-input>
                            <v-text-field placeholder="Email"></v-text-field>
                       </v-input>
                       <v-input>
                            <v-text-field placeholder="Subject"></v-text-field>
                       </v-input>
                       <v-input>
                            <v-text-field placeholder="Rate"></v-text-field>
                       </v-input>
                   </v-form>
                   <v-btn color='red' dark rounded to='/home'>Submit</v-btn>
               </v-flex>
           </v-layout>
       </v-container>
  </v-app>
</template>

<script>
    export default {
        name: 'Tutor', 

        data: () => {

        }
    }
</script>

<style> 

</style>