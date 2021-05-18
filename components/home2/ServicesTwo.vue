<template>
  <section class="service_section_2 commonSection">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title">Bienvenue sur NYNECORP - Agence de développement IT - QA - DIGITALE</h4>
          <h2 class="sec_title">Nos services</h2>
        
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>{{$t("serPro")}}</h3>
            <p>
             Nous assurons la conception et le développement de vos applications web, applications mobiles et applications de bureau à moindre coût. 
            </p>
            <div class="iconWrap">
             
              <img src="/images/service/programming.jpg" alt="">
            </div>
            <nuxt-link to="/prog">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>{{$t("serTwo")}}</h3>
            <p>
              En plus de l’accompagnement dans le développement de votre application, nous vous garantissons un suivi qualité grâce à notre équipe d’expert dans le domaine du QA & Testing. 
            </p>
            <div class="iconWrap">
              <img src="/images/service/QA.jpg" alt="">
            </div>
            <nuxt-link to="/qa-testing">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>{{$t("DESIGN")}}</h3>
            <p>
             Nous donnons une existence visuelle à votre entreprise en vous suivant dans la conception et la réalisation de votre charte graphique, impressions diverses, packaging, web et app design. 
            </p>
            <div class="iconWrap">
               <img src="/images/service/GD.jpg" alt="">
            </div>
            <nuxt-link to="/graphism-design">Lire plus</nuxt-link>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>{{$t("DIGITAL")}}</h3>
            <p>
            Nous proposons ici des services et formations en Community management, email marketing, SEO et en Stratégie du Marketing digital à des prix défiants toutes concurrences.
            </p>
            <div class="iconWrap">
               <img src="/images/service/MD.jpg" alt="">
            </div>
            <nuxt-link to="/digital-marketing">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>{{$t("BUSINESS")}}</h3>
            <p>
              Profitez de notre assistance en Gestion des sites E-commerce, Gestion de projet, Etude de marche, Business Plan, Montage de Cahier de charges et Conseil en gestion RH. 
            </p>
            <div class="iconWrap">
                <img src="/images/service/Biz1.jpg" alt="">
            </div>
            <nuxt-link to="/business">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>{{$t("ECHNOLOGIES")}}</h3>
            <p>
              Nous vous accompagnons ici dans divers domaines tel que : le Réseau Informatique, la Gestion des bases de données, la Sécurité informatique, l’Audit des projets web, la Gestion du cloud.
            </p>
            <div class="iconWrap">
              <img src="/images/service/tech.jpg" alt="">
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
</style>
