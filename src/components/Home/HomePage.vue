<template>
  <div class="home-page">
      <div>
        <div class="title d-flex justify-content-between">
          <h1 class="m-3 text-left"><strong>Photos</strong></h1>
          <button class="m-3 btn btn-primary text-right" @click="openModal">Ajouter une photo</button>
        </div> 
        <hr>
        <div class="d-flex justify-content-around flex-wrap m-5">    
          <div v-for="photo in photos" v-bind:key="photo.id" class="card mb-3" style="width: 24%">
            <img class="card-img-top" :src="photo.url" :alt="photo.description">
            <div class="card-body">
              <h5 class="card-title">{{ photo.description }}</h5>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  components: {
    
  },
  data() {
    return {
      photos: []
    }
  },
  created() {
    this.isConnected();
  },
  mounted() {
    this.getPhotos();
  },
  methods: {
    isConnected() {
      if(this.$store.state.token == null) {
        this.$router.push('/login');
      }
    },
    getPhotos() {
      axios.get('/photos', this.$store.state.config).then((response) => {
         this.photos = response.data.photos;
         this.checkPhotos();
      }).catch(error => console.log(error));
    },
    openModal() {
      this.$bvModal.show('new-photo');
    },
    checkPhotos() {
      if(this.photos == null) {
        this.$router.push('/login');
      }
    }
  }
}
</script>
<style scoped>

</style>