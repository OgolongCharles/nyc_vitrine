<template>
  <section class="service_section_2 commonSection">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title">Bienvenue sur NYNECORP - Agence de développement IT - QA - DIGITALE</h4>
          <h2 class="sec_title">{{$t("BUSINESS")}}</h2>
          <p class="sec_desc">
           
          </p>
        </div>
      </div>
          <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Gestion de site E-commerce</h3>
            <p>
          Nous vous accompagnons des compétences en marketing pour gérer correctement un e-commerce Ventes et Service à la clientèle 
            </p>
            <div class="iconWrap">
           
              <img src="/images/service/BizA.jpg" alt="">
           
            </div>
            <nuxt-link to="/prog">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Gestion de projet</h3>
            <p>
            Nous vous aidons définir le projet, le réduire à un ensemble de tâches à gérer, obtenir des ressources appropriées et construire une équipe pour effectuer le travail 
            </p>
            <div class="iconWrap">
              <img src="/images/service/Biz1.jpg" alt="">
            </div>
            <nuxt-link to="/qa-testing">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Business Plan </h3>
            <p>
           nous vous aidons en concevant Un business plan établi une feuille de route écrite pour l'entreprise d'un point de vue marketing, financier et opérationnel 
            </p>
            <div class="iconWrap">
               <img src="/images/service/Biz2.jpg" alt="">
            </div>
            <nuxt-link to="/graphism-design">Lire plus</nuxt-link>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Montage de Cahier de charges</h3>
            <p>
          Nous vous accompagnons dans la conception des cahier de charges pour la réalisation de vos projets 
            </p>
            <div class="iconWrap">
               <img src="/images/service/Biz3.jpg" alt="">
            </div>
            <nuxt-link to="/digital-marketing">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Conseil en Gestion RH </h3>
            <p>
            Pour la gestion RH de votre entreprise, les experts Nkap vous apportent des conseils et des solutions sur mesure . Audit de vos ressources humaines et bien d'autres 
            </p>
            <div class="iconWrap">
                <img src="/images/service/Biz4.jpg" alt="">
            </div>
            <nuxt-link to="/business">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Conseil Marketing strategique </h3>
            <p>
            Bénéficiez des conseils d'un spécialiste du marketing des services. Notre agence est un cabinet de conseil marketing. 
            </p>
            <div class="iconWrap">
              <img src="/images/service/Biz5.jpg" alt="">
            </div>
            <nuxt-link to="/tech">Lire Plus</nuxt-link>
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
.col-lg-4 h3{
  height: 35px
}
.iconWrap{
  height: 200px;
  width: 100%;
}
.col-lg-4 p{
  height: 200px
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
}
</style>
