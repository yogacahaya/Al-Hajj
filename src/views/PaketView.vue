<template>
  <div>
    <NavbarVue/>
    <PaketVue/>
  </div>
</template>

<script>
import NavbarVue from '@/components/NavbarVue.vue'
import PaketVue from '@/components/PaketVue.vue'
export default {
    name: 'PaketView',
    components: {
        NavbarVue,
        PaketVue
    }
}
</script>

<style>

</style>