<template>
  <div class="auth-form">
    <div class="d-flex flex-row justify-content-center bg-secondary text-light">
      <div class="w-50 p-3 mb-1">
        <div class="mb-5">
          <h1>Login</h1>
        </div>
        <b-form @submit="authentifierUtilisateur" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group 
            id="input-group-2" 
            label="Your password:" 
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.password"
              type="password"
              required
              placeholder="Enter password"
            ></b-form-input>
          </b-form-group>

          <b-button class="mt-5" type="submit" variant="primary">Submit</b-button>
        </b-form>
        <b-alert class="m-2"
            variant="danger"
            dismissible
            fade
            :show="showDangerAlert"
            @dismissed="showDismissibleAlert=false"
            >
            Verifiez les informations que vouz avez mis, car vous n'etes pas authentifié.
        </b-alert>
      </div>
    </div>  
  </div>
</template>

<script>
  export default {
    name: 'AuthForm',  
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        show: true,
        showDangerAlert: false
      }
    },
    methods: {
      authentifierUtilisateur() {
        axios.post('/user/auth', {}, { 
          auth: {
            username: this.form.email,
            password: this.form.password
        }}).then((response) => {
            this.$store.commit('setToken', response.data);
            this.$store.commit('setBearer');
            this.$router.push('/');
        }).catch(() => {
            this.showDangerAlert = true
        });
      },
      onReset(evt) {
        evt.preventDefault()
        this.form.email = ''
        this.form.password = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>