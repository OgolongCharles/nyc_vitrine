<template>
  <section class="service_section_2 commonSection">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title">Agilité   -   Techno  - Logique </h4>
          <h2 class="sec_title">Nous répondons rapidement aux besoins spécifiques de votre entreprise.</h2>
          <p class="sec_desc">
            Créez l'application de vos rêves à partir de zéro.<br>
            Simplicité - Compatibilité - Accessibilité
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Développement Web</h3>
            <p>
              Éditeur de contenu (CMS) ,Gestion de vos clients, Rapports PDF et statistiques, Commerce électronique
              Infolettres , Gestionnaire de fichiers, Gestionnaire de formulaires, Logiciel d'inventaire ,
              Réservations , Facturation ,Nouvelles et blog
            </p>
            <div class="iconWrap">
              <i class="mei-settings"></i>
            </div>
            <nuxt-link to="/service-detail">Découvrir plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Développement Mobile</h3>
            <p>
              Prototypes,Design et interfaces.
              Sous Android et iOS (prise de commandes, signature électronique, terminaux durcis, etc.)
            </p>
            <div class="iconWrap">
              <i class="mei-pie-chart"></i>
            </div>
            <nuxt-link to="/service-detail">Découvrir plus</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>Développement d'App de Bureau</h3>
            <p>
              Design de base et prototypes.
            </p>
            <div class="iconWrap">
              <i class="mei-transfer"></i>
            </div>
            <nuxt-link to="/service-detail">Découvrir plus</nuxt-link>
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

</style>
