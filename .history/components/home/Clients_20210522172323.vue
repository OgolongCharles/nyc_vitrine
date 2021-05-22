<template>
  <section class="commonSection client">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title">clients</h4>
          <h2 class="sec_title"> {{$t("Trust")}} </h2>

        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="client_slider">
            <div class="singleClient">
              <a href="#">
                <img src="/images/client/6.png" alt=""/>
              </a>
            </div>
            <div class="singleClient">
              <a href="#">
                <img src="/images/client/7.jpg" alt=""/>
              </a>
            </div>
            <div class="singleClient">
              <a href="#">
                <img src="/images/client/8.png" alt=""/>
              </a>
            </div>
            <div class="singleClient">
              <a href="#">
                <img src="/images/client/12.png" alt=""/>
              </a>
            </div>
            <div class="singleClient">
              <a href="#">
                <img src="/images/client/Logo-11.png" alt=""/>
              </a>
            </div>
            <div class="singleClient">
              <a href="#">
                <img src="/images/client/11.jpg" alt=""/>
              </a>
            </div>
            <div class="singleClient">
              <a href="#">
                <img src="/images/client/9.png" alt=""/>
              </a>
            </div>
            <div class="singleClient">
              <a href="#">
                <img src="/images/client/14.png" alt=""/>
              </a>
            </div>
            <div class="singleClient">
              <a href="#">
                <img src="/images/client/13.jpg" alt=""/>
              </a>
            </div>
              <div class="singleClient">
              <a href="#">
                <img src="/images/client/13.jpg" alt=""/>
              </a>
            </div>
            <div class="singleClient">
              <a href="#">
                <img src="/images/client/3.jpg" alt=""/>
              </a>
            </div>
            <div class="singleClient">
              <a href="#">
                <img src="/images/client/9.jpg" alt=""/>
              </a>
            </div>
              <div class="singleClient">
                <a href="#">
                  <img src="/images/client/10.jpg" alt=""/>
                </a>
            </div>
              <div class="singleClient">
                <a href="#">
                  <img src="/images/client/12.jpg" alt=""/>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "Clients",
      mounted() {
        if ($('.client_slider').length > 0) {
          $('.client_slider').owlCarousel({
            items: 4,
            margin: 30,
            autoplay: true,
            loop: true,
            nav: false,
            responsive: {
              0: {
                items: 1
              },
              560: {
                items: 2
              },
              768: {
                items: 3
              },
              992: {
                items: 4
              }
            }
          });
        }
      }

    }
</script>

<style scoped>

</style>
