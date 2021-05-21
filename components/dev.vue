<template >
  <section class="danger">
    <div class="container">
          <p class="text-center"> {{$t("devMessage")}} </p>
    </div>
  </section>
</template>

<script>
    export default {
      name: "dev"
    }
</script>

<style scoped>
.container{

background-color:rgba(1, 5, 4, 0.055)
}
.danger{
height: 20vh ;
background-color:rgba(1, 5, 4, 0.055)!important;
}
p {

z-index:1;
position: fixed;
font-size:50px;
color:red;
}
</style>
