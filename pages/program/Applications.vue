<template>
  <div>
    <PageBanner pageTitle="Programmation" bannerCss="pageBannerProg"/>
<!--    <ServiceDetail-->
<!--      -->
<!--     -->
<!--    votre marque devient mobile. Vos prospects et clients sont exposés à votre marque au quotidien. Elle les accompagne partout et tout au long de la journée. La dimension tactile des smartphones et des tablettes établit également un lien plus fort et personnel"-->
<!--     />-->
    <application-mobile
      title="DEVELOPPEMENT D’APPLICATION WEB/APPLICATION WEB DE ZERO"
      paragraph="Avec une application,"
      image1="/images/service/app.jpg"
    />
  </div>
</template>

<script>

  import PageBanner from "~/components/pages/PageBanner";
  import ServiceDetail from "~/components/pages/ServiceDetail";
  import ApplicationMobile from "../../components/pages/Sous-Programmation/application-mobile";

  export default {
    components: {
      ApplicationMobile,
      PageBanner,
      ServiceDetail,


    },
    head(){
      return {
        title: "NYNE CORP | Service Detail"
      }
    }
  }
</script>
