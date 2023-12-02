<template>
  <div class="tentang">
      <div class="bgprofil">
  </div>
  <div class="textabout">
    <h2>TENTANG AL-HAJJ<br> TRAVEL UMROH TERBAIK</h2>
    <span>Jadikanlah Perjalanan Umroh Anda Lebih Bermakna Dengan <br> Bergabung Bersama Al-Hajj</span>
  </div>
  <div class="texts">
    <span>RabbaniTour, biro travel umroh yang telah memiliki izin Umroh No 31 tahun 2017 (Perpanjangan izin jadi U.300 tahun 2020) Alhamdulillah <br> dengan izin Allah SWT 100% telah memberangkatkan jamaah umroh sampai pulang kembali ke tanah air dengan selamat. Rabbanitour <br> juga meraih penghargaan sebagai Biro Perjalanan wisata tersertifikasi oleh Badan Akreditasi Nasional dengan 7 Tour leader Tersertifikasi <br> nasional, 1 Travel Consultant tingkat Asean dan 1 Asesor tingkat Nasional. Bukti bahwa Rabbanitour berkomitmen untuk melayani <br> pelanggan/para calon jemaah kami lebih baik, Rabbanitour akan melayani dengan maksimal dari awal hingga akhir 100% pelayanan <br> untuk jamaah, dan PT Rabbani Semesta Utama bersertifikat Nasional, sehingga Sahabat tidak usah ragu lagi untuk mempercayakan Rabbantiour sebagai <br> Sahabat Anda menuju Baitullah.
Dengan <br> komitmen tersebut, Alhamdulilah, sebuah kehormatan untuk Rabbanitour.com terpilih menjadi salah satu dari 5 Penyelenggara Perjalanan Umroh yang terseleksi dari ribuan travel umroh di Indonesia beserta Amphuri dan Himpuh yang menandatangani MOU dengan Saudi Tourism Authority (STA) untuk mempromosikan wisata Saudi baik meningkatkan kunjungan jamaah umrah dan wisatawan non umroh yang akan explore negara Saudi.</span>
  </div>
  <div class="feed">
    <h2>Review Jamaah Al-Hajj</h2>
  <div class="feedback">
    <ReviewPage/>
  </div>
  </div>
  </div>
  <div class="footer">
    <FooterPage/>
  </div>

</template>

<script>
import ReviewPage from '@/review/ReviewPage.vue';
import FooterPage from '@/review/FooterPage.vue';
export default {
    name: 'ProfilVue',
    components: {
      ReviewPage,
      FooterPage
    }
}
</script>
