<template>
  <section class="gmapsection">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 noPadding">
          <div class="gmap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2615.2785224399386!2d2.0248060153236422!3d49.043327595621804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6f4a1fbd0fd5f%3A0xe8dc9ba7cd786fc8!2s3%20Rue%20des%20Ch%C3%A2taigniers%2C%2095800%20Cergy%2C%20France!5e0!3m2!1sfr!2scm!4v1619196900496!5m2!1sfr!2scm" width="100%" height="750" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
         <!-- <div class="gmap" id="gmap"></div>-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "Map",
      mounted() {
        //Google map
        if ($('#gmap').length > 0) {
          var contact_map
          contact_map = new GMaps({
            el: '#gmap',
            lat: 40.728157,
            lng: -74.077644,
            scrollwheel: false,
            zoom: 10,
            zoomControl: false,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
          });
          contact_map.addMarker({
            lat: 40.728157,
            lng: -74.077644,
            icon: "images/marker.png",
            animation: google.maps.Animation.DROP
          });

          var styles = [
            {
              "featureType" : "road",
              "stylers" : [
                {"color" : "#ffffff"}
              ]
            }, {
              "featureType" : "water",
              "stylers" : [
                {"color" : "#ededed"}
              ]
            }, {
              "featureType" : "landscape",
              "stylers" : [
                {"color" : "#f7f7f7"}
              ]
            }, {
              "elementType" : "labels.text.fill",
              "stylers" : [
                {"color" : "transparent"}
              ]
            }, {
              "featureType" : "poi",
              "stylers" : [
                {"color" : "#e5e5e5"}
              ]
            }, {
              "elementType" : "labels.text",
              "stylers" : [
                {"saturation" : 1},
                {"weight" : 0.1},
                {"color" : "#818181"}
              ]
            }
          ];
          contact_map.addStyle({
            styledMapName : "Styled Map",
            styles : styles,
            mapTypeId : "map_style"
          });
          contact_map.setStyle("map_style");
        }
      }
    }
</script>

<style scoped>
.gmap{
  width: 100%;
  height:70vh;
  
}
.gmapsection{
  height:100vh;
}
</style>
