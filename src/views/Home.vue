<template>
  <div class="home">
    <nav-bar></nav-bar>
    <home-page></home-page> 
    <modal-new-photo></modal-new-photo>  
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import HomePage from '../components/Home/HomePage';
import ModalNewPhoto from '../components/Home/ModalNewPhoto';
export default {
  name: 'Home',
  components: {
    NavBar,
    HomePage,
    ModalNewPhoto
  }
}
</script>
