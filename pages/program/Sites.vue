<template>
  <div>
    <PageBanner pageTitle="Programmation" bannerCss="pageBannerProg"/>
<!--    <ServiceDetail-->
<!--     title="Conseil en développement d’application "-->
<!--     image1="/images/service/devSite3.jpg"-->
<!--     paragraph="Créer un site vitrine pour son entreprise permet de trouver de nouveaux clients sur internet. Selon le secteur d’activité de l’entreprise et ses objectifs, il va permettre d’obtenir des demandes de devis, de contact, des appels téléphoniques, des téléchargements de documents… Et donc d’obtenir de nouveaux clients que l’entreprise n’aurait peut-être pas pu atteindre en dehors du web."-->
<!--      />-->
    <conseil
      title="Conseil en développement d’application"
      image1="/images/service/devSite3.jpg"
      paragraph="Nkap Sarl vous accompagne dans la définition de votre stratégie numérique en mettant à votre disposition notre expertise du web, du marketing digital et des réseaux sociaux."
    />
    <CallToAction />
  </div>
</template>

<script>
  import PageBanner from "~/components/pages/PageBanner";
  import ServiceDetail from "~/components/pages/ServiceDetail";
  import CallToAction from "~/components/home/CallToAction";
  import Conseil from "../marketing/conseil";
  import conseil from "../../components/pages/Sous-Programmation/conseil";
  export default {

    components: {
      conseil,
      Conseil,
      PageBanner,
      ServiceDetail,
      CallToAction,

    },
    head(){
      return {
        title: "NYNE CORP | Service Detail"
      }
    }
  }
</script>
