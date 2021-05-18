<template>
  <section class="service_section_2 commonSection">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title">Bienvenue sur NYNECORP - Agence de développement IT - QA - DIGITALE</h4>
          <h2 class="sec_title">{{$t("DESIGN")}}</h2>
          <p class="sec_desc">
            
          </p>
        </div>
      </div>
       <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Cartes de visite</h3>
            <p>
          Les cartes de visite renforcent votre identité visuelle. Créez vos cartes de visite personnalisées 
            </p>
            <div class="iconWrap">
           
              <img src="/images/service/g1.png" alt="">
           
            </div>
            <nuxt-link to="graph/carte-visite">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Conception logo </h3>
            <p>
            Besoin d’un logo ? Avec Nkap Group obtenez un logo unique qui correspond à votre identité. 
            </p>
            <div class="iconWrap">
              <img src="/images/service/g2.jpg" alt="">
            </div>
            <nuxt-link to="graph/logo">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Charte graphique </h3>
            <p>
         La charte graphique est l’ADN de votre entreprise visuelle. . Elle garantit votre identité visuelle 
            </p>
            <div class="iconWrap">
               <img src="/images/service/g3.png" alt="">
            </div>
            <nuxt-link to="graph/charte-graph">Lire plus</nuxt-link>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Conception dépliant</h3>
            <p>
         Bénéficiez d’une meilleure conception de vos dépliant chez Nkap Group.
            </p>
            <div class="iconWrap">
               <img src="/images/service/g4.png" alt="">
            </div>
            <nuxt-link to="graph/depliant">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Web Design</h3>
            <p>
            Une forme d’art visuel consistant à créer des œuvres animés.
            </p>
            <div class="iconWrap">
                <img src="/images/service/p4.png" alt="">
            </div>
            <nuxt-link to="graph/web-design">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Vidéo animée </h3>
            <p>
            Elles permettent de relayer sur son site des informations complexes de façon très simple 
            </p>
            <div class="iconWrap">
              <img src="/images/service/g6.jpg" alt="">
            </div>
            <nuxt-link to="graph/video">Lire Plus</nuxt-link>
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
