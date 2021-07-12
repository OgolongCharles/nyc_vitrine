<template>
  <section class="commonSection service_detail">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-sm-8">
          <div class="">

            <img v-bind:src="image1" alt="">
            <h2>DEVELOPPEMENT D’APPLICATION WEB/APPLICATION WEB DE ZERO</h2>

          </div>
        </div>
        <div class="col-lg-4 col-sm-4 sidebar">
          <aside class="widget categories">
            <h3 class="widget_title">Plus de services</h3>
            <div class="meipaly_categorie_widget">
              <ul>
                <li><nuxt-link to="/prog">OUTSOURCING</nuxt-link></li>
                <li><nuxt-link to="/prog">{{$t("serPro")}}</nuxt-link></li>
                <li><nuxt-link to="/qa-testing">{{$t("serTwo")}}</nuxt-link></li>
                <li><nuxt-link to="/graphism-design">{{$t("DESIGN")}}</nuxt-link></li>
                <li><nuxt-link to="/digital-marketing">{{$t("DIGITAL")}}</nuxt-link></li>
                <li><nuxt-link to="/business">{{$t("BUSINESS")}}</nuxt-link></li>
                <li><nuxt-link to="/tech">{{$t("ECHNOLOGIES")}}</nuxt-link></li>
              </ul>
            </div>
          </aside>
        </div>
        <div class="row">
          <h1>A-	Le Guide</h1>
          <p>
            Nkap Sarl accompagne ses clients dans l'élaboration ou la valorisation de leur stratégie digitale afin de promouvoir leur marque, leurs produits et leurs services.
          </p>

          <aside class="widget categories sidebar col-lg-12 col-sm-4">
            <h3 class="widget_title">Dans cet objectif, nous mettons à votre disposition nos experts web et marketing digital qui seront en mesure de répondre à  des <br><br> problématiques telles que :</h3>
            <div class="meipaly_categorie_widget">
              <ul>
                <li>-	Trouver les solutions technologiques adaptées à son projet de site web, d'application ou de e-commerce ;</li>
                <li>-	Adopter les bonnes décisions en termes d'UI et UX ;</li>
                <li>-	Anticiper et optimiser son référencement sur le web (SEO) ;</li>
                <li>-	Développer une identité de marque ;</li>
                <li>-	Elaborer ou améliorer une stratégie de marketing digital ;</li>
                <li>-	Créer une stratégie et gérer ses réseaux sociaux ;</li>
                <li>-	Elaborer une stratégie publicitaire sur les réseaux sociaux ;</li>
                <li>-	Conseil en développement Infrastructurelle</li>
              </ul>
            </div>
          </aside>
        </div><br>
        <div class="row">
          <h1>B-	Méthodologie et transparence</h1>


          <aside class="widget categories sidebar col-lg-12 col-sm-4">
            <h3 class="widget_title">Nkap Sarl met en place une méthodologie de travail structurée et adaptée à vos enjeux et ce sur toute la durée du projet :</h3>
            <div class="meipaly_categorie_widget">
              <ul>
                <li>-	Analyse et étude de vos besoins ;</li>
                <li>-	Recommandations stratégiques web & marketing digital ;</li>
                <li>-	Définition du plan d'actions et priorisation des tâches ;</li>
                <li>-	Mise en œuvre et pilotage projet ;</li>
                <li>-	Livraison et suivi des résultats ;</li>
                <li>-	Réversibilité et passation.</li>
                <li>-	A chaque étape de votre projet avec nous, vous disposerez de documents clés et d'un suivi sur nos propres outils de gestion.</li>

              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ApplicationDeBureau",
  props: {
    title: {
      type:String,
    },
    image1: {
      type:String,
    },
    paragraph: {
      type:String,
    }
  },
}
</script>

<style scoped>
img{
  width: 70%;
}



</style>
