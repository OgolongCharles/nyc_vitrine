<template>
  <div>
    <PageBanner pageTitle="Contact" bannerCss="pageBannerTech"/>
    <icons />
    <Contact/>
    <Map />
    <ClientsTwo />

  </div>
</template>

<script>
 import icons from "~/components/icons";
  import PageBanner from "~/components/pages/PageBanner";
  import Contact from "../components/pages/Contact";
  import Map from "~/components/home2/Map";
  import ClientsTwo from "~/components/home2/ClientsTwo";
  export default {
    components: {
      Contact,
      icons,
      PageBanner,
      Map,
      ClientsTwo,
    },
    head(){
      return {
        title: "NYNE CORP | Contact"
      }
    }
  }
</script>
