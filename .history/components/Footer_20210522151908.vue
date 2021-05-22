<template>
  <div>
    <footer class="footer_1">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-sm-6 col-md-5">
          <aside class="widget aboutwidget">
            <a href="#"><img src="/images/foo_logo.png" alt=""></a>
            <p>
              Bienvenue dans notre agence de conseil informatique.
              Nous sommes principalement spécialisé en Software Testing.
              Nous vous accompagnons également sur toutes les problématiques de développement logiciel,
              Graphisme, Motions Design ,Community Management etc ...
              Avec nous, Le conseil et la mise en oeuvre de solutions informatiques est désormais à portée de main
            </p>
          </aside>
        </div>
        <div class="col-lg-4 col-sm-4 col-md-4">
          <aside class="widget contact_widgets">
            <h3 class="widget_title">Contact</h3>
            <p>
              3 rue des chataîgniers <br>
              95800 Cergy , France
            </p>
            <p>P: +33 6 16 63 42 37</p>
            <p>E: <a href="#">info@nynecorp.org</a></p>
            <div class="ftp__links">
              <div class="ftp__form-subs">
                <p class="ftp__links-desc__desc">{{ $t("abonnet") }}</p>
                <form action="#">
                  <input type="email" placeholder="$t" v-model="email" required>
                  <button class=" btn-primary"  @click.prevent="contact">{{$t("envBut")}}</button>
                </form>
              </div><!-- end ftp__form-subs -->
            </div><!-- end ftp__links -->
          </aside>
          <notifications group="foo" position="bottom right"/>
        </div>
        <div class="col-lg-3 col-sm-2 col-md-3">
          <aside class="widget social_widget">
            <h3 class="widget_title">Social</h3>
            <ul>
              <li>
                <a href="https://twitter.com/NyneCorp" target="_blank">
                <i class="fa fa-twitter"></i>Twitter</a>
              </li>
              <li>
                <a href="https://www.facebook.com/nynecorp" target="_blank">
                <i class="fa fa-facebook-square"></i>Facebook</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/nyne-corp" target="_blank">
                  <i class="fa fa-linkedin-square"></i>LinkedIn</a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCgEIs7eD-ofr1aFlFhU0rJQ/?guided_help_flow=5" target="_blank">
                <i class="fa fa-youtube-play"></i>Youtube</a>
              </li>
              <li>
                <a href="https://www.instagram.com/nynecorps" target="_blank">
                  <i class="fa fa-instagram"></i>Instagram</a>
              </li>
            </ul>
          </aside>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 col-sm-12 text-center">
          <div class="copyright">
            © copyright 2020 par <a href="#">NKAP SARL</a>
          </div>
        </div>
      </div>
    </div>
  </footer>

    <!-- Bact To To -->
    <a id="backToTop" href="#" class=""><i class="fa fa-angle-double-up"></i></a>
    <!-- Bact To To -->


  </div>
</template>

<script>
  import API from '../api/index'
    export default {
      name: "Footer",
      data(){
        return {
          email: null,
          reference: 'nyneCorp'
        }
      },
      mounted() {

        var back = $("#backToTop"),
          body = $("body, html");
        $(window).on('scroll', function () {
          var h = $(window).height() / 2;
          if ($(window).scrollTop() > h)
          {
            back.addClass('showit');
          } else
          {
            back.removeClass('showit');
          }

        });
        body.on("click", "#backToTop", function (e) {
          e.preventDefault();
          body.animate({scrollTop: 0}, 800);
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

</style>
