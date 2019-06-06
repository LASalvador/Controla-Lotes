<template>
  <v-content>
    <v-layout wrap>
  <v-flex xs12 sm12 md3 ml-5>
    <v-text-field
      label="Produto"
      placeholder=" Ex: Prótese dentária">
    </v-text-field>
    <v-text-field v-model="quantidade" type="number" label="Quantidade" append-outer-icon="add" @click:append-outer="increment" prepend-icon="remove" @click:prepend="decrement"></v-text-field>
        <h2> Etapas </h2>
        <v-checkbox v-model="checkbox1" :label="`Produção`"></v-checkbox>
        <v-checkbox v-model="checkbox2" :label="`Lavagem`"></v-checkbox>
        <v-checkbox v-model="checkbox3" :label="`Jateamento`"></v-checkbox>
        <v-checkbox v-model="checkbox4" :label="`Inspeção`"></v-checkbox>
        <v-checkbox v-model="checkbox5" :label="`Lavagem 2`"></v-checkbox>
        <v-checkbox v-model="checkbox6" :label="`Sala limpa`"></v-checkbox>
        <v-checkbox v-model="checkbox7" :label="`Embalagem`"></v-checkbox>
      <v-btn icon @click="enviar_dados"></v-btn>
      </v-flex>
    </v-layout>
  </v-content>

</template>
<style scoped>

</style>
<script src="./CreateController.js"> </script>
