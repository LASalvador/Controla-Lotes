<template>
  <v-app id="inpire">
    <app-header/>
    <v-content>
      <router-view ></router-view>
    </v-content>
    <app-footer/>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
