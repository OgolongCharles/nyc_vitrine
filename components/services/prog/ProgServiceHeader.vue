<template>
  <section class="service_section_2 commonSection">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title">Bienvenue sur NYNECORP - Agence de développement IT - QA - DIGITALE</h4>
          <h2 class="sec_title">{{$t("serPro")}}</h2>

        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Conseil en développement d’application </h3>
            <p>
            Nkap développe des sites vitrines professionnels pour Entreprises et Particuliers, avec un accent sur la performance et l'expérience utilisateur
            </p>
            <div class="iconWrap">

              <img src="/images/service/p1.png" alt="">

            </div>
            <nuxt-link to="program/Sites">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Applications Mobiles</h3>
            <p>
             Nkap dispose de toute l'expertise dont vous avez besoin pour développer les meilleures Applications Mobiles sur androïde  comme sur IOS
            </p><br><br>
            <div class="iconWrap">
              <img src="/images/service/p2.png" alt="">
            </div>
            <nuxt-link to="program/Applications">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Applications De Bureau</h3>
            <p>
            Nkap met à votre disposition des solutions multiples d'applications rapides et stables pour des clients spécifique
            </p><br><br>
            <div class="iconWrap">
               <img src="/images/service/p3.png" alt="">
            </div>
            <nuxt-link to="program/Applications-De-Bureau">Lire plus</nuxt-link>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Sites Web</h3>
            <p>
           Nkap édite et intègre des solutions web pour entreprise de toutes tailles (Site E-Commerce, Presta shop, Shopify)
            </p>
            <div class="iconWrap">
               <img src="/images/service/p4.png" alt="">
            </div>
            <nuxt-link to="program/sites-web">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>CMS </h3>
            <p>
              Nkap développe des thèmes sur mesure et des extentions wordpress pour vos besoins spécifiques des fonctionalités les plus simples au plus évoluées
            </p>
            <div class="iconWrap">
                <img src="/images/service/p5.png" alt="">
            </div>
            <nuxt-link to="program/CMS">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Site Web de Zéro </h3>
            <p>
             Expert dans le développement web ,nous partons de zéro et concevons des sites élégant et performant pour les entreprises et particuliers.
            </p>
            <div class="iconWrap">
              <img src="/images/service/p6.png" alt="">
            </div>
            <nuxt-link to="program/Site-Web-de-Zero">Lire Plus</nuxt-link>
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
