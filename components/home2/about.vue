<template>
    <section class="main">
        <div class="conatainer">
            <div class="row text-center">
                 <h4 class="sec_title title-here text-center">{{ $t("our_history") }} </h4>
                <div class="col-lg-6 col-sm-6 col-md-6">
                  <p class="text-justify">
                    {{ $t("history_talk1_part1") }} <br/>
                    {{ $t("history_talk1_part2") }} <br/>
                    {{ $t("history_talk1_part3") }} <br/>
                    {{ $t("history_talk1_part4") }} <br/>
                    {{ $t("history_talk1_part5") }} <br/>
                    {{ $t("history_talk1_part6") }}
                  </p>
                </div>
                <div class="col-lg-6 col-sm-6 col-md-6">
                    <div class="ab_img1">
                          <img src="/images/home_1/9.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
name:"about"
}
</script>

<style scoped>
.main{
margin-top: 50px;
}
.row{
    width:100%;
    margin: auto;
}
p{
   margin: 50px;
}
.ab_img1{
    width:100%;
}
img{
     margin: 50px;
}
</style>
