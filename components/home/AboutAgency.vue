<template>
  <section class="commonSection ab_agency">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-sm-6 col-md-6 PR_79">
          <h4 class="sub_title">{{$t("welcomeMessage")}}</h4>
          <h2 class="sec_title MB_45"> {{$t("thirdMessage")}} </h2>
          <p class="sec_desc">
          {{$t("SecondMessage")}}
          </p>
          
          <a class="common_btn red_bg" href="/services"><span> {{$t("Buttons")}} </span></a>
        </div>
        <div class="col-lg-6 col-sm-6 col-md-6">
          <div class="ab_img1">
            <img src="/images/home_1/10.jpg" alt=""/>
          </div>
          <div class="ab_img2">
            <img src="/images/home_1/9.jpg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "AboutAgency"
    }
</script>

<style scoped>

</style>
