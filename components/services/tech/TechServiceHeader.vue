<template>
  <section class="service_section_2 commonSection">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title">Bienvenue sur NYNECORP - Agence de développement IT - QA - DIGITALE</h4>
          <h2 class="sec_title">{{$t("ECHNOLOGIES")}}</h2>
          <p class="sec_desc">
           
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Reseaux Informatiques</h3>
            <p>
            Notre offre consiste en la réalisation, administration des systèmes et réseaux informatiques, pour lesquels nous assurons un suivi minutieux
            </p>
            <div class="iconWrap">
           
              <img src="/images/service/tech1.png" alt="">
           
            </div>
            <nuxt-link to="Technology/Reseaux">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Cloud</h3>
            <p>
             Service Cloud est le service de l'entreprise Nkap pour diminuer le temps de réponse, et offrir un service proactif et de qualité.
            </p>
            <div class="iconWrap">
              <img src="/images/service/cloud.png" alt="">
            </div>
            <nuxt-link to="Technology/cloud">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Bases de donnees</h3>
            <p>
           Notre équipe spécialisée en gestion des bases de données, est composée d’experts certifiés, éprouvés par de nombreuses références
            </p>
            <div class="iconWrap">
               <img src="/images/service/data.png" alt="">
            </div>
            <nuxt-link to="Technology/Base-de-donne">Lire plus</nuxt-link>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Securite informatique</h3>
            <p>
          Nos experts de la cybersécurité sont à votre écoute pour vous fournir des réponses immédiates et des formations afin de faire face aux menaces avancées et inconnues
            </p>
            <div class="iconWrap">
               <img src="/images/service/tech3.png" alt="">
            </div>
            <nuxt-link to="Technology/Securite-informatique">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Audit </h3>
            <p>
             Afin de réaliser des audits internes efficients de votre systéme, nos équipes intègrent au cœur de leurs méthodologies les nouvelles technologies 
            </p>
            <div class="iconWrap">
                <img src="/images/service/tech5.png" alt="">
            </div>
            <nuxt-link to="Technology/Audit">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Microsoft 365 Business </h3>
            <p>
            Toutefois, nous recommandons à nos clients professionnels de recourir aux services de support technique étendus via le Support Premier pour entreprises et Services Microsoft 
            </p>
            <div class="iconWrap">
              <img src="/images/service/tech6.png" alt="">
            </div>
            <nuxt-link to="Technology/microsoft">Lire Plus</nuxt-link>
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
