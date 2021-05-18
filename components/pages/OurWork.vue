<template>
  <section class="commonSection our_work">
    <div class="videoWrap_2">
      <img src="/images/home_1/about.jpg" alt="">
      <div class="play_video">
        <a class="video_popup" href="/images/home_1/Service_nyne.mp4"><i class="fa fa-play"></i></a>
        <h2>Watch Video</h2>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-sm-6">
        </div>
        <div class="col-lg-6 col-sm-6">
          <div class="ab_detail_wrap">
            <h4 class="sub_title">NYNE CORP</h4>
            <h2 class="sec_title">{{$t("Video2")}}</h2>
            <p class="sec_desc">
            {{$t("Video")}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "OurWork",
      mounted() {
        $('.video_popup').magnificPopup({
          type: 'iframe'
        });
      }
    }
</script>

<style scoped>

</style>
