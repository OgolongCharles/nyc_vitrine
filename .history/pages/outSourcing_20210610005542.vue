<template>
  <div>
    <dev />
  </div>
</template>
//    <img src="/images/service/out.jpg" alt="">
  <video playsinline autoplay muted loop poster="polina.jpg" id="bgvid">

          <source src="/images/service/video.mp4" type="video/mp4">
              </video>
<script>
  import PageBanner from "~/components/pages/PageBanner";
  import dev from "~/components/dev";


  export default {
    components: {
      PageBanner,
    dev
    },
    head(){
      return {
        title: "NYNE CORP | Services"
      }
    }
  }
</script>
