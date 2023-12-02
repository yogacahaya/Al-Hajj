<template>
  <div class="nav">
    <div class="logo">
        <img src="../assets/logokoper.jpg" alt="" width="75">
        <span>Al-Hajj</span>
    </div>
    <li>
        <router-link to="/">Beranda</router-link>
        <router-link to="/profil">Profil</router-link>
        <router-link to="/paket">Paket</router-link>
    </li>
  </div>
</template>

<script>
export default {
    name: 'NavbarVue',
    
}
</script>

