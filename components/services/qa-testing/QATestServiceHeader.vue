<template>
  <section class="service_section_2 commonSection">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title">Bienvenue sur NYNECORP - Agence de développement IT - QA - DIGITALE</h4>
          <h2 class="sec_title">{{$t("serTwo")}}</h2>
          <p class="sec_desc">
            
          </p>
        </div>
      </div>
         <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>QA DATA ANALYST</h3>
            <p>
           Examiner vos données et les transformer en informations.Faire de la veille sur les performances et les plans de controle qualité.
            </p>
            <div class="iconWrap">
           
              <img src="/images/service/QA1.png" alt="">
           
            </div>
            <nuxt-link to="/prog">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>QA MANUAL TESTING</h3>
            <p>
            Analyser les specifications fonctionnelles de vos applications et logiciels et extraire les exigences de test.Vérifier et tester les fonctionnalités essentielles de vos applications ou du logiciels de façon manuel 
            </p>
            <div class="iconWrap">
              <img src="/images/service/QA2.png" alt="">
            </div>
            <nuxt-link to="/qa-testing">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>QA SUPPORT</h3>
            <p>
           Elaborer la politique d'assurance de la qualité, la réalisation de tests et d'inspectionsMettre en œuvre la politique d'assurance de la qualité, la réalisation de tests et d'inspections 
            </p>
            <div class="iconWrap">
               <img src="/images/service/QA3.png" alt="">
            </div>
            <nuxt-link to="/graphism-design">Lire plus</nuxt-link>
          </div>
        </div>
      </div>
         <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>QA AUTOMATION TESTING</h3>
            <p>
          Analyser les specifications fonctionnelles de vos applications et logiciels et extraire les exigences de test.Vérifier et tester les fonctionnalités essentielles de vos application ou du logiciel de façon automatique 
            </p>
            <div class="iconWrap">
               <img src="/images/service/QA4.png" alt="">
            </div>
            <nuxt-link to="/digital-marketing">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>QA BUGS ANALYST </h3>
            <p>
            Determiner et Analyser la severite des defauts sur les fonctionnalites des logiciels et applications.Classifier les defauts par priorité 
            </p>
            <div class="iconWrap">
                <img src="/images/service/QA5.png" alt="">
            </div>
            <nuxt-link to="/business">Lire Plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>QA EXPERT </h3>
            <p>
            Assurer le suivir du cycle de vie des defauts sur les fonctionnalites des logiciels et applications 
            </p>
            <div class="iconWrap">
              <img src="/images/service/QA6.png" alt="">
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
.service_section_2{
  background: radial-gradient(circle at center center, #fff 15%, #4085f4 100%) !important;
}
.col-lg-4:hover{
  transition-delay:2s ease-out;
  cursor: pointer;
transform:translateY(-2%);
}
</style>
