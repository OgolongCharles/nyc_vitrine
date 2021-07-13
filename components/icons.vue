 <template>
     <div class="new-icons" :style="`display: ${icons ? 'block' : 'none'}`">

            <ul>
                    <li>
                        <a style="color:#1da1f2;" href="https://twitter.com/NyneCorp" target="_blank">
                        <i class="fa fa-twitter"></i><h6 class="A">Twitter</h6></a>
                    </li>
                    <li>
                        <a style="color:#385898;" href="https://www.facebook.com/nynecorp" target="_blank">
                        <i class="fa fa-facebook-square"></i><h6 class="B">Facebook</h6></a>
                    </li>
                    <li >
                        <a style="color:#0A66C2;" href="https://www.linkedin.com/company/nyne-corp" target="_blank">
                        <i class="fa fa-linkedin-square"></i><h6 class="C">LinkedIn</h6></a>
                    </li>
                    <li >
                        <a style="color:red;" href="https://www.youtube.com/channel/UCOivSKdHWlUmpxwFkPUue-w" target="_blank">
                        <i class="fa fa-youtube-play"></i><h6 class="D">Youtube</h6></a>
                    </li>
                    <li>
                        <a style="color:#00a4f6" href="https://www.instagram.com/nynecorps" target="_blank">
                        <i class="fa fa-instagram"></i><h6 class="E">Instagram</h6></a>

                    </li>
            </ul>
        </div>
</template>

<script>
export default {
    name: "icons",
    data(){
            return {
            icons : false,
            reference: 'nkap_vitrine'
            }
        },
        mounted(){
            window.addEventListener('scroll', this.handleScroll);

        },
        methods: {

            handleScroll () {
            if (window.scrollY > 100) {
                this.icons  = true
            }
            else if (window.scrollY < 100) {
                this.icons  = false
            }

            },
        },
}


</script>

<style scoped>
.li{
    list-style: none;
}

li{
    background: rgb(238, 229, 229 ,0.5);
    margin-left: -35px;

    margin-top:30px;
    padding: 10px;
    border-radius: 10px;
}
.A{
  display: none;
}
.B{
  display: none;
}
.C{
  display: none;
}
.D{
  display: none;
}
.E{
  display: none;
}

.new-icons{
    position:fixed;
    top:50%;
    transform: translateY(-30%);
    z-index: 999;
    height: 100vh;

}
.fa-twitter:hover h6 .A{
  display: inline-block;
}
.fa-facebook-square:hover .B{
  display: inline-block;
}
.fa-youtube-play:hover .D{
  display: inline-block;
}
.fa-linkedin-square:hover .C{
  display: inline-block;
}
.fa-instagram:hover .E{
  display: inline-block;
}


@media(max-width: 500px){

.new-icons ul{
display: none;
}
}
</style>

