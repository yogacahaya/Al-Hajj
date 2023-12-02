<template>
  <div class="home">
    <NavbarVue />
    <BerandaVue/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarVue from '@/components/NavbarVue.vue'
import BerandaVue from '@/components/BerandaVue.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarVue,
    BerandaVue
  }
}
</script>
