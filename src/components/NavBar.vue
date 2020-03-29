<template>
    <div>
        <b-navbar toggleable="md" type="dark" style="background-color: #2fe2fd;">
            <b-navbar-brand><strong>GeoQuizz Backoffice</strong></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-button variant="danger" @click="logout">Logout</b-button>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    methods: {
        logout() {
            this.$store.commit('resetState');
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
a {
    text-decoration-style: none !important;
    text-decoration: none !important;
}
a:hover {
    background-color: #467899;
}
</style>