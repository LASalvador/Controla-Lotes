<template>
  <v-content>
    <v-layout wrap>
      <v-flex xs12 sm6 md3 ml-4>
         <v-text-field
            v-model="id"
           label="Lote"
           placeholder="id lote. Ex: 123"
         ></v-text-field>
       </v-flex>
      <v-flex xs12 sm6 md1>
        <v-btn icon @click="selecionarLote ">
          <v-icon>search</v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs12 sm12 md5>
        <div
         v-if="card_visible">
         <v-card
         color="indigo"
         class="white--text">
           <v-card-title>
             {{ lote.cod_lote }}
           </v-card-title>
           <v-card-text>
             <b>Produto: </b>{{ lote.id_produto }}<br>
             <b>Qtd: </b> {{ lote.quantidade_produtos }}<br>
             <b>Etapa: </b> {{ lote.etapa }} <br>
             <b>dt_inicio: </b>{{ lote.createdAt }}<br>
             <b>dt_modificacao: </b>{{ lote.updatedAt }}<br>
             <b>trajeto: </b>{{ lote.trajeto }}<br>
           </v-card-text>
         </v-card>
         <v-text-field label="Responsavel" v-model="responsavel"></v-text-field>
         <v-text-field label="Maquina" v-model="maquina"></v-text-field>
         <v-select xs12 smelect :items="situacoes" label="Status" :rules="[rules.required]" v-model="situacao"></v-select>
         <v-select xs12 smelect :items="trajetos" label="Trajeto" :rules="[rules.required]" v-model="local"></v-select>
        </div>
      </v-flex>
      <v-flex xs12 sm4 md4 offset-md6>
        <v-btn
        color="indigo"
        class="white--text"
        @click="atualizarLote"
        v-if="card_visible">
        Atualizar lote</v-btn>
      </v-flex>
    </v-layout>
  </v-content>
</template>
<style scoped>

</style>
<script src="./UpdateController.js"> </script>
