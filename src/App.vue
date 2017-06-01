<template>
  <div id="app">
  {{msg}}
  <div class="btn" @click="toggleModal">
  Ouvrez ce modal de qualité
  </div>
  <sweet-modal ref="modal">{{modalText}}</sweet-modal>
  </div>
</template>

<script>
import _ from 'lodash'
import {SweetModal, SweetModalTab} from 'sweet-modal-vue'
export default {
  name: 'app',
  components: {
    SweetModal,
    SweetModalTab
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      modalText: 'Tout bonnement fabuleux'
    }
  },
  methods: {
    toggleModal () {
      console.log('La fonction toggleModal est bien exécutée')
      this.$refs.modal.open() 
    }
  }
}


</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
