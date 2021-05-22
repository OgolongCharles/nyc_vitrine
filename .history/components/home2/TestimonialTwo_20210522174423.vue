<template>
  <section class="commonSection testimonial_2">
    <div class="container">
      <div class="row">
        <div id="tabs" class="testimoniTab">
          <div class="col-lg-5 col-sm-5">
            <h4 class="sub_title color_aaa">Témoignages</h4>
            <h2 class="sec_title white">Clients satisfaits</h2>
            <ul class="slider_testimoial">
              <li class="active control_item">
                <a href="#tab_1" data-toggle="tab">
                  <span><img src="/images/team/AVTR-02.png" alt=""/></span>
                  <div class="author_detail">
                    <h5>Shirley Smith</h5>
                    <h6>Director</h6>
                  </div>
                </a>
              </li>
              <li class="control_item">
                <a href="#tab_2" data-toggle="tab">
                  <span><img src="/images/team/AVTR-02.png" alt=""/></span>
                  <div class="author_detail">
                    <h5>Mike hardson</h5>
                    <h6>co founder</h6>
                  </div>
                </a>
              </li>
              <li class="control_item">
                <a href="#tab_3" data-toggle="tab">
                  <span><img src="/images/team/AVTR-04.png" alt=""/></span>
                  <div class="author_detail">
                    <h5>Augustin Njigui</h5>
                    <h6>CEO INOV CONSULTING</h6>
                  </div>
                </a>
              </li>
              <li class="control_item">
                <a href="#tab_4" data-toggle="tab">
                  <span><img src="/images/team/AVTR-05.png" alt=""/></span>
                  <div class="author_detail">
                    <h5>Patrick Azoni</h5>
                    <h6>CEO YAMO</h6>
                  </div>
                </a>
              </li>
              <li class="control_item">
                <a href="#tab_5" data-toggle="tab">
                  <span><img src="/images/team/AVTR-02.png" alt=""/></span>
                  <div class="author_detail">
                    <h5>Pericles Nchebou</h5>
                    <h6>manager</h6>
                  </div>
                </a>
              </li>
              <li class="control_item">
                <a href="#tab_6" data-toggle="tab">
                  <span><img src="/images/team/AVTR-02.png" alt=""/></span>
                  <div class="author_detail">
                    <h5>Cedric Folepe</h5>
                    <h6>CEO CEF</h6>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-7 col-sm-7">
            <div class="dots_owl"></div>
            <div class="tab-content clearfix">
              <div class="tab-pane fade in active testi_con" id="tab_1">
                <p>
                {{$}}

                </p>
                <span>25 nov, 2018</span>
              </div>
              <div class="tab-pane fade testi_con" id="tab_2">
                <p>
                  C’est vraiment rafraîchissant d’avoir une telle touche personnelle.
                  Il existe de nombreuses variantes de passages de disponibles,
                  Cela est dû à leur excellent service, à leurs prix compétitifs et à leur support client.
                  Mais la majorité ont subi une altération sous une forme ou une autre par un bourdonnement injecté
                </p>
                <span>26 nov, 2018</span>
              </div>
              <div class="tab-pane fade testi_con" id="tab_3">
                <p>
                  “Cela est dû à leur excellent service, à leurs prix compétitifs et à leur support client. C'est complètement
                  rafraîchissant pour obtenir une telle touche personnelle. Il existe de nombreuses variantes de passages de disponibles,
                  mais la majorité ont subi une altération sous une forme ou une autre par un bourdonnement injecté
                </p>
                <span>27 nov, 2018</span>
              </div>
              <div class="tab-pane fade testi_con" id="tab_4">
                <p>
                  “Cela est dû à leur excellent service, à leurs prix compétitifs et à leur support client. C'est complètement
                  rafraîchissant pour obtenir une telle touche personnelle. Il existe de nombreuses variantes de passages de disponibles,
                  mais la majorité ont subi une altération sous une forme ou une autre par un bourdonnement injecté
                </p>
                <span>28 nov, 2018</span>
              </div>
              <div class="tab-pane fade testi_con" id="tab_5">
                <p>
                  “Cela est dû à leur excellent service, à leurs prix compétitifs et à leur support client. C'est complètement
                  rafraîchissant pour obtenir une telle touche personnelle. Il existe de nombreuses variantes de passages de disponibles,
                  mais la majorité ont subi une altération sous une forme ou une autre par un bourdonnement injecté
                </p>
                <span>29 nov, 2018</span>
              </div>
              <div class="tab-pane fade testi_con" id="tab_6">
                <p>
                  “Cela est dû à leur excellent service, à leurs prix compétitifs et à leur support client. C'est complètement
                  rafraîchissant pour obtenir une telle touche personnelle. Il existe de nombreuses variantes de passages de disponibles,
                  mais la majorité ont subi une altération sous une forme ou une autre par un bourdonnement injecté
                </p>
                <span>30 nov, 2018</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "TestimonialTwo",
      mounted() {
        if ($('.slider_testimoial').length > 0) {
          $('.slider_testimoial').owlCarousel({
            items: 3,
            autoplay: true,
            nav: false,
            dots: true,
            dotsContainer: '.dots_owl'
          });
        }
        if($('.slider_testimoial').length > 0){
          $('.slider_testimoial li.control_item').on('click', function(){
            var $this = $(this);
            var id = $('a', $this).attr('href');
            $('a[href="' + id + '"]', $this).tab('show');
            $('.slider_testimoial li.control_item').removeClass('active');
            $this.addClass('active');
          });
        }
      }
    }
</script>

<style scoped>

</style>
