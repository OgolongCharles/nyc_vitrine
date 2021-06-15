<template>
    <div>
      <section class="commonSection funfact">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-sm-6 col-md-3 noPadding BR">
              <div class="singlefunfact text-center">
                <h1 data-counter="10" class="timer"><span class="countSpan">8</span>10</h1>
                <h3>{{$t("fun1")}}</h3>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-3 noPadding BR">
              <div class="singlefunfact text-center">
                <h1 data-counter="8" class="timer"><span class="countSpan"></span>12</h1>
                <h3>{{$t("fun2")}}</h3>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-3 noPadding BR">
              <div class="singlefunfact text-center">
                <h1 data-counter="7448" class="timer"><span class="countSpan"></span>7448</h1>
                <h3>{{$t("fun3")}}</h3>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-3 noPadding">
              <div class="singlefunfact text-center">
                <h1 data-counter="12" class="timer"><span class="countSpan"></span>15</h1>
                <h3>{{$t("fun4")}}</h3>
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
                <img src="/images/home_1/firm-handshake.jpg" alt="">
                <div class="abc_inner">
                  <div class="row">
                    <div class="col-lg-5 col-sm-5 col-md-5">
                    </div>
                    <div class="col-lg-7 col-sm-7 col-md-7">
                      <div class="abci_content">
                        <h2>{{$t("funPro1")}}</h2>
                        <p>
                          {{$t("funPro2")}}
                        </p>
                        <a class="common_btn red_bg" href="/about"><span>{{$t("Buttons")}}</span></a>
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
