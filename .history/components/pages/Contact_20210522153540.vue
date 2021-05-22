<template>
  <section class="commonSection ContactPage">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title">Nous contacter</h4>
          <h2 class="sec_title">Laissez nous un message</h2>
          <toast-container :toastConfig="{}"></toast-container>

        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-sm-12 col-md-10 col-md-offset-1">
          <form action="#"  novalidate="true" class="contactFrom" id="contactForm">
            <p v-if="errors.length">
              <b style="color: #d43f3a">Please correct the following error(s):</b>
            <ul>
              <li style="color: #761c19" v-for="error in errors">{{ error }}</li>
            </ul>
            <div class="row">
              <div class="col-lg-6 col-sm-6">
                <input class="input-form required" type="text"   :placeholder= $t("firstName")" v-model="f_name">
              </div>
              <div class="col-lg-6 col-sm-6">
                <input class="input-form required" type="text"  :placeholder="Last Name" v-model="l_name">
              </div>
              <div class="col-lg-6 col-sm-6">
                <input class="input-form required" type="email"  placeholder="Email" v-model="email">
              </div>
              <div class="col-lg-6 col-sm-6">
                <input class="input-form" type="text"  :placeholder="Phone Number" v-model="phone">
              </div>
              <div class="col-lg-12 col-sm-12">
                <textarea class="input-form required"  placeholder="Message" v-model="description"></textarea>
              </div>
            </div>
            <button class="common_btn red_bg" id="con_submit" @click.prevent="checkForm"><span>{{ $t("envBut") }}</span></button>
          </form>
        </div>
      </div>
      <notifications group="foo" />
    </div>
  </section>
</template>

<script>
  import API from '../../api/index'
  import Vue from 'vue'
  import VueOnToast from 'vue-on-toast';
  Vue.use(VueOnToast);
    export default {
      name: "Contact",
      data: function () {
        return {
          email: null,
          title: '',
          description: '',
          errors: [],
          f_name: '',
          l_name: '',
          phone: ''


        }
      },
      methods: {
        resetForm(){
          this.title = '',
            this.description = '',
            this.email = ''

        },

        contact:async function () {
          this.title = this.f_name + this.l_name + this.phone
          API.createContact({email: this.email, title:this.title, description:this.description}).then((data) => {
            console.log("contact", data)
            this.$notify({
              'group': 'foo',
              'title': 'Félicitation',
              'text': 'Votre mail à été envoyer. Merci.'
            });

            this.resetForm()
          })
        },

        checkForm: function (e) {
          this.errors = [];

          if (!this.f_name || !this.l_name || !this.phone) {
            this.errors.push("Name required.");
          }
          if (!this.email) {
            this.errors.push('Email required.');
          } else if (!this.validEmail(this.email)) {
            this.errors.push('Valid email required.');
          }

          if (!this.errors.length) {
            this.contact()
            return true;
          }

          e.preventDefault();
        },
        validEmail: function (email) {
          var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
        }

      }
    }
</script>

<style scoped>

</style>
