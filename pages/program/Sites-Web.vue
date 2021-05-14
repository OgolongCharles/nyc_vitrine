<template>
  <div>
     <PageBanner pageTitle="Programmation" bannerCss="pageBannerProg"/>
    <ServiceDetail 
     title="Site Web"
     image1="/images/service/DevSite2.jpg"
     paragraph="Avoir un site internet est un investissement pour votre entreprise. Le fait de n’avoir rien qu’une unique page web aura déjà une influence sur votre notoriété. Cela peut donc vous servir à être plus connu auprès de vos clients potentiels et donc à augmenter vos ventes. Votre site internet permet de vous faire connaître davantage : il sert à présenter votre activité, vos valeurs… Comment les gens peuvent vous connaître si on ne vous voit pas ?"
    />
    <CallToAction />
  </div>
</template>

<script>
  import PageBanner from "~/components/pages/PageBanner";
  import ServiceDetail from "~/components/pages/ServiceDetail";
  import CallToAction from "~/components/home/CallToAction";
  export default {
    components: {
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