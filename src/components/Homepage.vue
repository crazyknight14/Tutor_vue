<template>
  <v-app>
      <v-container>
          <v-layout justify-center align-center>
              <v-flex sm3>
                  <h2>Teach. Learn. Grow.</h2>
                  <v-card>
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        src="@/home_image.png"
                        >
    </v-img>
                  </v-card>
              </v-flex>
              </v-layout>
      </v-container>
  </v-app>
</template>

<script>
    export default {
        name: 'Homepage',
        data: () => {

        }
    }
</script>

<style>
.info {
    background-color: #fffdd0;
    text-align: center;
    align-items: center;
}
</style>