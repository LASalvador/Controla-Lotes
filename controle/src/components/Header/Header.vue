<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile v-for="(item, index) in menu_item" :key="index">
            <v-btn color="indigo" :to="item.rota" flat> {{ item.title }} </v-btn>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Controle de lotes</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script src="./HeaderController.js"></script>
