<template>
  <div class="hero"></div>
  <div class="baner">
    <div class="heroText">
      <div class="text">
        <h2>
          Ibadah Haji Mudah Dengan<br />
          Al-hajj
        </h2>
      </div>
      <div class="btn">
        <router-link to="/profil"> <button>cari tau yuk!</button></router-link>
      </div>
    </div>
    <div class="swiper">
      <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <img src="../assets/asita.webp" width="245" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/bnsp.webp" width="245" /> </swiper-slide
        ><swiper-slide>
          <img src="../assets/ikhlas-beramal.webp" width="245" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/kan.webp" width="245" /> </swiper-slide
        ><swiper-slide>
          <img src="../assets/bnsp.webp" width="245" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/asita.webp" width="245" /> </swiper-slide
        ><swiper-slide>
          <img src="../assets/ikhlas-beramal.webp" width="245" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/siskopatuh.webp" width="245" /> </swiper-slide
        ><swiper-slide>
          <img src="../assets/kan.webp" width="245" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <div class="about">
    <div class="text-about">
      <h2>Travel Haji Terpercaya dan <br />Berkualitas</h2>
      <p>
        Travel Al-Hajj merupakan agency travel dibidang haji dan <br />
        umroh di dirikan pada tahun 2013. Al-Hajj telah bekerjasama dengan Saudi
        Arabia Tourism(SAT),<br />
        dan Kami Terpercaya di indonesia.
      </p>
    </div>
    <div class="imgbox">
      <img src="../assets/jemaah.jpg" alt="" />
    </div>
  </div>
  <div class="sub">
    <h2>Program Al-Hajj</h2>
  </div>
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
  <div class="review">
      <div class="reviewbg"></div>
      <div class="baner-review">
        <h2>TESTIMONI JAMAAH <br> UMROH <span>AL-HAJJ.</span> </h2>
        <p>Berikut ini beberapa cerita luar biasa dari para jamaah umroh yang <br> telah menikmati pengalaman umroh bersama Al-Hajj.</p>
      </div>
      <ReviewPage/>
    </div>
    <div class="footer">
      <FooterPage/>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import ReviewPage from '../review/ReviewPage.vue';
import FooterPage from '../review/FooterPage.vue'

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "../assets/css/style.css";

// import required modules
import { Pagination } from "swiper/modules";

export default {
  name: "BerandaVue",
  components: {
    Swiper,
    SwiperSlide,
    ReviewPage,
    FooterPage
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style>
</style>