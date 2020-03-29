<template>
    <b-modal id="new-photo" title="Ajouter une photo" centered hide-footer>
        <div class="text-center">
            <form-photo></form-photo>
        </div>
    </b-modal>
</template>

<script>
import FormPhoto from './FormPhoto';
export default {
    name: "ModalNewPhoto",
    components: {
        FormPhoto
    }
}
</script>

<style scoped>
p{
    margin-top: 1em;
}
</style>