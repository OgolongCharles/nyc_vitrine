<template>
  <section class="commonSection ContactPage">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title">Nous contacter</h4>
          <h2 class="sec_title">Laissez nous un message</h2>
          <p class="sec_desc">
            Nous nous engageons à fournir à nos clients un service exceptionnel <br> tout en offrant à nos employés la meilleure formation.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-sm-12 col-md-10 col-md-offset-1">
          <form action="#" method="post" class="contactFrom" id="contactForm">
            <div class="row">
              <div class="col-lg-6 col-sm-6">
                <input class="input-form required" type="text" name="f_name" id="f_name" placeholder="First Name">
              </div>
              <div class="col-lg-6 col-sm-6">
                <input class="input-form required" type="text" name="l_name" id="l_name" placeholder="Last Name">
              </div>
              <div class="col-lg-6 col-sm-6">
                <input class="input-form required" type="email" name="email" id="email" placeholder="Email Address">
              </div>
              <div class="col-lg-6 col-sm-6">
                <input class="input-form" type="text" name="phone" id="phone" placeholder="Phone Number">
              </div>
              <div class="col-lg-12 col-sm-12">
                <textarea class="input-form required" name="con_message" id="con_message" placeholder="Write Message"></textarea>
              </div>
            </div>
            <button class="common_btn red_bg" type="submit" id="con_submit"><span>Envoyer</span></button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "Contact"
    }
</script>

<style scoped>

</style>
