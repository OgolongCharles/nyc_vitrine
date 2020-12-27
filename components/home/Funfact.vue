<template>
    <div>
      <section class="commonSection funfact">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-sm-6 col-md-3 noPadding BR">
              <div class="singlefunfact text-center">
                <h1 data-counter="10" class="timer"><span class="countSpan">8</span>10</h1>
                <h3>Projets livrés</h3>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-3 noPadding BR">
              <div class="singlefunfact text-center">
                <h1 data-counter="8" class="timer"><span class="countSpan"></span>4</h1>
                <h3>Clients Actifs</h3>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-3 noPadding BR">
              <div class="singlefunfact text-center">
                <h1 data-counter="6000" class="timer"><span class="countSpan"></span>6000</h1>
                <h3>Clients NKAP</h3>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-3 noPadding">
              <div class="singlefunfact text-center">
                <h1 data-counter="10" class="timer"><span class="countSpan">2</span>10</h1>
                <h3>Clients Satisfaits</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="commonSection trustClient">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-sm-12">
              <div class="CL_content">
                <img src="/images/home_1/4.jpg" alt="">
                <div class="abc_inner">
                  <div class="row">
                    <div class="col-lg-5 col-sm-5 col-md-5">
                    </div>
                    <div class="col-lg-7 col-sm-7 col-md-7">
                      <div class="abci_content">
                        <h2>Plus de 15 clients nous ont déjà fait confiance</h2>
                        <p>
                          Avec près de 5 ans d'existence de nombreux clients ont fait appel à nos services.
                          Pour leurs besoins, nos clients bénéficient d’une rigueur , d'un professionnalisme et d'une  sécurisé, propice à la concentration dans leur coeur de métier.
                          Quelques références de clients ayant fait appel à nos services se trouvent plus haut:
                        </p>
                        <a class="common_btn red_bg" href="#"><span>Plus encore</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
    export default {
      name: "Funfact",
      mounted() {
        var skl = true;
        $('.singlefunfact').appear();
        $('.singlefunfact').on('appear', function () {
          if (skl)
          {
            $('.timer').each(function () {
              var $this = $(this);
              jQuery({Counter: 0}).animate({Counter: $this.attr('data-counter')}, {
                duration: 3000,
                easing: 'swing',
                step: function () {
                  var num = Math.ceil(this.Counter).toString();
                  if (Number(num) > 999) {
                    while (/(\d+)(\d{3})/.test(num)) {
                      num = num.replace(/(\d+)(\d{3})/, '<span class="countSpan">' + '$1' + '</span>' + '$2');
                    }
                  }
                  $this.html(num);
                }
              });
            });
            skl = false;
          }
        });
      }
    }
</script>

<style scoped>

</style>
