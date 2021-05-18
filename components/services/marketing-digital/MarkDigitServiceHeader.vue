<template>
  <section class="service_section_2 commonSection">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title">Bienvenue sur NYNECORP - Agence de développement IT - QA - DIGITALE</h4>
          <h2 class="sec_title">{{$t("DIGITAL")}}</h2>
          <p class="sec_desc">
           
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Community management</h3>
            <p>
            La création, l’optimisation et le développement des réseaux sociaux nécessaires à votre marque 
            </p>
            <div class="iconWrap">
           
              <img src="/images/service/Mk1.png" alt="">
           
            </div>
            <nuxt-link to="marketing/community">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>E-mail Marketing</h3>
            <p>
            Nous générons des campagnes emailing à l’image de votre marque ou de votre entreprise. 
            </p>
            <div class="iconWrap">
              <img src="/images/service/Mk2.png" alt="">
            </div>
            <nuxt-link to="marketing/email">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>SEO</h3>
            <p>
          Boostez votre visibilité de votre entreprise et de vos produits grâce au référencement naturel 
            </p>
            <div class="iconWrap">
               <img src="/images/service/Mk3.png" alt="">
            </div>
            <nuxt-link to="marketing/seo">Lire plus</nuxt-link>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Marketing de reseaux sociaux</h3>
            <p>
Nous vous accompagnons dans l’usage de la publicité sociale de type Facebook Adds,les pratiques de newsjacking,le Marketing d’influence 
            </p>
            <div class="iconWrap">
               <img src="/images/service/Mk4.png" alt="">
            </div>
            <nuxt-link to="marketing/marketin-rs">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>SMO </h3>
            <p>
              Optimisation et référencement de vos campagnes sur les RS Programmation, planning et suivi de vos campagnes

            </p>
            <div class="iconWrap">
                <img src="/images/service/Mk5.png" alt="">
            </div>
            <nuxt-link to="marketing/smo">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Conseil en strategie de marketing digital </h3>
            <p>
            Les réseaux sociaux représentent un levier désormais incontournable pour viabiliser vos activités sur le web. 
            </p>
            <div class="iconWrap">
              <img src="/images/service/Mk6.png" alt="">
            </div>
            <nuxt-link to="marketing/conseil">Lire Plus</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "ServicesTwo"
    }
</script>

<style scoped>
.row{
  margin-top:50px;
}
.iconWrap{
  height: 200px;
  width: 100%;
}
.col-lg-4 h3{
  height: 35px
}
.col-lg-4 p{
  height: 200px;
}
.iconWrap img{
    height: 200px;
  width: 100%;
}
.service_section_2{
  background: radial-gradient(circle at center center, #fff 15%, #4085f4 100%) !important;
}
.col-lg-4:hover{
  transition-delay:2s ease-out;
  cursor: pointer;
transform:translateY(-2%);
  box-shadow: 5px 10px 18px #888888;
}
</style>
