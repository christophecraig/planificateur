<template>
  <div id="app">
    <h4>{{msg}}</h4>
    <project-list></project-list>
    <div class="btn" @click="toggleModal">
      Ouvrez ce modal de qualité
    </div>
    <sweet-modal ref="modal">
      {{modalText}}
    </sweet-modal>
  </div>
</template>

<script>
import _ from 'lodash'
import {SweetModal, SweetModalTab} from 'sweet-modal-vue'
import projectList from './components/projects.vue'
export default {
  name: 'app',
  components: {
    SweetModal,
    SweetModalTab,
    projectList
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

.btn {
  cursor: pointer;
}


</style>
