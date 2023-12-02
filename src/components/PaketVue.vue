<template>
  <div class="products">
    <div class="products">
    <div class="imgProduct">
      <img src="../assets/umroh-hebat.jpg" alt="" width="276"/>
      <div class="desc">
        <h2>Umroh Hebat</h2>
        <span>12 Desember</span> <span class="day">9 hari</span>
        <h2 class="price">39,5 JT</h2>
      </div>
      <div class="bton">
        <button>Detail program</button>
      </div>
    </div>
    <div class="imgProduct">
      <img src="../assets/umroh-premium.jpg" alt="" width="276"/>
      <div class="desc">
        <h2>Umroh Premium</h2>
        <span>12 Desember</span>  <span class="day">9 hari</span>
        <h2 class="price">42,3 JT</h2>
      </div>
      <div class="bton">
        <button>Detail program</button>
      </div>
    </div>
    <div class="imgProduct">
      <img src="../assets/umrohplusmesir.jpg" alt="" width="276"/>
      <div class="desc">
        <h2>Umroh Plus Mesir</h2>
        <span>24 Desember</span> <span class="day">12 hari</span>
        <h2 class="price">57,2 JT</h2>
      </div>
      <div class="bton">
        <button>Detail program</button>
      </div>
    </div>
  </div>
  </div>
  <div class="footer">
    <FooterPageVue/>
  </div>
</template>

<script>
import FooterPageVue from '@/review/FooterPage.vue';
export default {
    name: 'PaketVue',
    components: {
        FooterPageVue
    }
}
</script>
