<template>
  <v-content>
    <v-layout wrap>
      <v-flex xs12 sm6 md3 ml-4>
         <v-text-field
           label="Lote"
           v-model="id"
           placeholder="id lote. Ex: 123"
         ></v-text-field>
       </v-flex>
      <v-flex xs12 sm6 md1>
        <v-btn icon @click=" pesquisarLote ">
          <v-icon>search</v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs12 sm12 md5>
        <v-card
        color="indigo"
        class="white--text"
        v-if="card_visible">
          <v-card-title>ID:{{ lote.cod_lote }}</v-card-title>
          <v-card-text>
          <b>Produto: </b>{{ lote.id_produto }} <br>
          <b>Qtd: </b> {{ lote.quantidade_produtos }}<br>
          <b>Etapa: </b> {{ lote.etapa }} <br>
          <b>status: </b> {{ lote.status }}<br>
          <b>responsavel: </b> {{lote.responsavel }}<br>
          <b>maquina: </b>{{ lote.maquina }}<br>
          <b>dt_inicio: </b>{{ lote.createdAt }}<br>
          <b>dt_modificacao: </b>{{ lote.updatedAt }}<br>
          <b>trajeto: </b>{{ lote.trajeto }}
          </v-card-text>
        </v-card>
      </v-flex> 
    </v-layout>
  </v-content>
</template>
<style scoped>

</style>
<script src="./SearchController.js"> </script>
