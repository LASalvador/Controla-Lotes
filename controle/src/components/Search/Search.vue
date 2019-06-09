<template>
  <v-content>
    <v-layout wrap>
      <v-flex xs12 sm6 md3 ml-4>
         <v-text-field
           label="Lote"
           placeholder="id lote. Ex: 123"
         ></v-text-field>
       </v-flex>
      <v-flex xs12 sm6 md1>
        <v-btn icon @click=" pesquisarLote ">
          <v-icon>search</v-icon>
        </v-btn>
      </v-flex>
      <!-- <v-flex xs12 sm12 md5>
        <v-card
        color="indigo"
        class="white--text"
        v-if="card_visible">
          <v-card-title>ID: 123</v-card-title>
          <v-card-text>
          <b>Produto: </b>Protese 66<br>
          <b>Qtd: </b> 12<br>
          <b>Etapa: </b> Lavagem<br>
          <b>status: </b>em processo<br>
          <b>responsavel: </b>Joaozinho<br>
          <b>maquina: </b>Lavadeira 72<br>
          <b>dt_inicio: </b>12/05/2019<br>
          <b>dt_modificacao: </b>15/05/2019<br>
          <b>trajeto: </b>Lavagem -> aspiragem -> teste -> fim<br>
          </v-card-text>
        </v-card>
      </v-flex> -->

    </v-layout>
  </v-content>
</template>
<style scoped>

</style>
<script src="./SearchController.js"> </script>
