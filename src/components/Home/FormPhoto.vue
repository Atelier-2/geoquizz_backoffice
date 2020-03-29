<template>
    <div>
        <b-form>
            <b-form-group
                id="input-group-1"
                label="Description:"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="form.description"
                type="text"
                required
                placeholder="Enter description"
                ></b-form-input>
            </b-form-group>

            <b-form-group 
                id="input-group-2" 
                label="Longitude:" 
                label-for="input-2"
            >
                <b-form-input
                id="input-2"
                v-model="form.long"
                required
                placeholder="Enter longitude"                
                ></b-form-input>
            </b-form-group>

            <b-form-group 
                id="input-group-3" 
                label="Latitude:" 
                label-for="input-3"
            >
                <b-form-input
                id="input-3"
                v-model="form.lat"
                required
                placeholder="Enter latitude"                
                ></b-form-input>
            </b-form-group>

            <b-form-group 
                id="input-group-4" 
                label="URL:" 
                label-for="input-4"
            >
                <b-form-input
                id="input-4"
                v-model="form.url"
                required
                placeholder="Enter URL"                
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary" @click="ajouterPhoto">Ajouter photo</b-button>
            
        </b-form>
        <b-alert class="m-2"
            variant="success"
            dismissible
            fade
            :show="showSuccessAlert"
            @dismissed="showDismissibleAlert=false"
            >
            Vous avez reussi a ajouter une photo
        </b-alert>
        <b-alert class="m-2"
            variant="danger"
            dismissible
            fade
            :show="showDangerAlert"
            @dismissed="showDismissibleAlert=false"
            >
            Vous n'avez pas reussi a ajouter une photo. Essayer une autre fois.
        </b-alert>
    </div>
</template>

<script>

export default {
    name: 'FormPhoto',
    data() {
      return {
        form: {
          description: '',
          long: 0,
          lat: 0,
          url: '',
          id_serie: 1
        },
        id: null,
        token: null,
        showSuccessAlert: false,
        showDangerAlert: false
      }
    },
    methods: {
        ajouterPhoto() {
          axios.post('/photos', {
              description: this.form.description,
              long: this.form.long,
              lat: this.form.lat,
              url: this.form.url,
              id_serie: this.form.id_serie                
          }, this.$store.state.config).then((response) => {
              this.showSuccessAlert = !this.showSuccessAlert;
              this.showDangerAlert = this.showDangerAlert;
              this.form.description = '';
              this.form.long = 0;
              this.form.lat = 0;
              this.form.url = '';
          }).catch(() => {
              this.showDangerAlert = !this.showDangerAlert;
              this.showSuccessAlert = this.showSuccessAlert;
          });
        }
    }
  }
</script>