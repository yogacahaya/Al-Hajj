<template>
  <div>
    <NavbarVue/>
    <div class="pofil">
       <ProfilVue />
    </div>
  </div>

</template>

<script>
import NavbarVue from '@/components/NavbarVue.vue'
import ProfilVue from '@/components/ProfilPage.vue';
export default {
    name: 'ProfilView',
    components: {
        NavbarVue,
        ProfilVue
    }
}
</script>

<style>

</style>