<template>
  <v-container>
  <v-layout row wrap>
  <v-flex v-for="book in books" :key="book.id" xs12 sm10 md8 offset sm1 offset-md-2>
  <v-card color="info" class="white--texthite">

  </v-card>

  </v-flex>
  </v-layout >
  </v-container>

</template>

<script>

export default {
    computed:{
        books(){
            return this.$store.getters.getBooks
        }
    }
    
};
</script>

<style scoped>

</style>