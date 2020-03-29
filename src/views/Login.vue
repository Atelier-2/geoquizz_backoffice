<template>
  <div class="login">
   <login-page></login-page>
   <auth-form></auth-form>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginPage from '../components/Login/LoginPage.vue';
import AuthForm from '../components/Login/AuthForm.vue';

export default {
  name: 'Login',
  components: {
    LoginPage,
    AuthForm
  }
}
</script>
