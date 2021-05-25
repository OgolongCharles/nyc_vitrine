<template>
  <section class="commonSection what_wedo">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">

          <h2 class="sec_title"> {{$t("digital")}} </h2>

        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-sm-12">
          <div class="videoWrap">
            <img src="/images/home_1/.jpg" alt="">
            <div class="play_video">
              <a class="video_popup" href="/images/home_1/Service_nyne.mp4"><i class="fa fa-play"></i></a>
              <h2>Voir la Video</h2>
            </div>
          </div>
        </div>
      </div>
    <!--  <div class="row">
        <div class="col-lg-4 col-sm-5 col-md-4">
          <h4 class="sub_title">Ne manquez pas nos dernières mises à jour</h4>
          <h2 class="sec_title">Suivez-nous</h2>
        </div>
       <div class="col-lg-8 col-sm-7 col-md-8">
          <form action="" method="post" class="subscribefrom">
            <input type="email" placeholder="Entrez votre mail" name="email" v-model="email" required>
            <button class="common_btn red_bg" type="submit" name="submit" @click.prevent="contact"><span>Abonnez-vous</span></button>
          </form>
        </div>
      </div>-->
    </div>
  </section>
</template>

<script>
    export default {
      name: "WhatWeDo",
      mounted() {
        $('.video_popup').magnificPopup({
          type: 'iframe'
        });
      },
      methods: {
        resetForm(){
          this.email = ''
        },
        contact:async function () {
          API.saveMail({email: this.email, reference: this.reference}).then((data) => {
            console.log("contact", data)
            this.$notify({
              'group': 'foo',
              'title': 'Félicitation',
              'text': 'Votre mail à été enregistre. Merci.'
            });
            this.resetForm()
          })
        },
      }
    }
</script>

<style scoped>
@media(max-width:600px){
.videoWrap img{
height: 50vh;
}
}
</style>
