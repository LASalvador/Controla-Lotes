<template>
  <v-content>
    <v-layout wrap>
  <v-flex xs12 sm12 md3 ml-5>
    <v-text-field
      label="Produto"
      placeholder=" Ex: Prótese dentária">
    </v-text-field>
    <v-text-field v-model="quantidade" type="number" label="Quantidade" append-outer-icon="add" @click:append-outer="increment" prepend-icon="remove" @click:prepend="decrement"></v-text-field>

      </v-flex>
    </v-layout>
  </v-content>

</template>
<style scoped>

</style>
<script src="./CreateController.js"> </script>
