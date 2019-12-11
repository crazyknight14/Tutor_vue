<template>
    <v-app>
       <v-container fluid>
           <v-layout justify-start align-left>
               <v-flex sm4>
                   <h1>Student Registration</h1>
                   <h2>Please fill out the following fields</h2>
                   <v-form>
                       <v-input>
                            <v-text-field placeholder="Name"></v-text-field>
                       </v-input>
                       <v-input>
                           <v-text-field placeholder="Class Level"></v-text-field>
                       </v-input>
                       <v-input>
                            <v-text-field placeholder="Subject"></v-text-field>
                       </v-input>
                   </v-form>
                   <v-btn round color='red' dark to='/home'>Submit</v-btn>
               </v-flex>
           </v-layout>
       </v-container>
  </v-app>
</template>

<script>
    export default {
        name: 'Student', 

        data: () => {

        }
    }
</script>

<style> 

</style>