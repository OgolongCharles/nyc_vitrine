 <template>
     <div class="new-icons" :style="`display: ${icons ? 'block' : 'none'}`">

            <ul>
                    <li>
                        <a style="color:#1da1f2;" href="https://twitter.com/NyneCorp" target="_blank">
                        <i class="fa fa-twitter"></i>Twitter</a>
                    </li>
                    <li>
                        <a style="color:#385898;" href="https://www.facebook.com/nynecorp" target="_blank">
                        <i class="fa fa-facebook-square"></i>Facebook</a>
                    </li>
                    <li >
                        <a style="color:#0A66C2;" href="https://www.linkedin.com/company/nyne-corp" target="_blank">
                        <i class="fa fa-linkedin-square"></i>LinkedIn</a>
                    </li>
                    <li >
                        <a style="color:red;" href="https://www.youtube.com/channel/UCgEIs7eD-ofr1aFlFhU0rJQ/?guided_help_flow=5" target="_blank">
                        <i class="fa fa-youtube-play"></i>Youtube</a>
                    </li>
                    <li>
                        <a style="color:#00a4f6" href="https://www.instagram.com/nynecorps" target="_blank">
                        <i class="fa fa-instagram"></i>Instagram</a>
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
            else if (window.scrollY > 1000){}
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
    background: rgb(238, 229, 229);
    margin-top:30px;
    padding: 10px;
    border-radius: 10px;
}


.new-icons{
    position:fixed;
    top:50%;
    transform: translateY(-30%);
    z-index: 999;
    height: 100vh;

}


@media(max-width: 500px){

.new-icons ul{
display: none;
}
}
</style>

