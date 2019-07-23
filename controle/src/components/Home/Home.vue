<template>
  <v-content>
    <v-layout wrap>
      <v-flex xs6 md2 lg2 xl2  v-for="(lote, index) in lotes" :key="index" ml-3 mr-3 mt-3 mb-3>
        <v-card color="indigo"  >
          <v-card-title class="white--text"> {{ lote.cod_lote }}</v-card-title>
          <v-card-text class="white--text">
            <b>Produto:</b> {{ lote.id_produto }}
            <br>
            <b>local:</b> {{ lote.etapa }}
            <br>
            <b>status:</b> {{ lote.status }}
          </v-card-text>
        </v-card>
        <!-- <v-card color="indigo">
          <v-card-text>Abacate</v-card-text>
        </v-card> -->
      </v-flex>
    </v-layout>
  </v-content>
</template>
<style scoped>

</style>
<script src="./HomeController.js"> </script>
