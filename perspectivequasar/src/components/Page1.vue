<template>
  <div class="page1">
    <div class='usernamebar'>
      <q-input v-model='username' v-bind:style='{fontSize: "2vh", width: "60%", left: "20%", height: "10%"}' float-label="Enter Username" placeholder="Platypus"/>
    </div>
    <div class='passwordbar'>
      <q-input v-model="password" v-bind:style='{fontSize: "2vh", width: "60%", left: "20%", height: "10%"}' float-label="Enter Password" placeholder="Secret" type="password"/>
    </div>
    <div class='passwordbarconfirm'>
      <q-input v-model="passwordconfirm" v-bind:style='{fontSize: "2vh", width: "60%", left: "20%", height: "10%"}' float-label="Confirm Password" placeholder="Secret" type="password"/>
    </div>
    <q-btn class='signbuttons button1' @click="makeUser()">Sign Up!</q-btn>
    <q-modal ref="maximizedModal" maximized :content-css="{padding: '50px'}">
      <h4>¡Peligroso!</h4><p>{{modalwarning}}</p>
      <q-btn color="tertiary" @click="$refs.maximizedModal.close()">Close Me</q-btn>
    </q-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
import {
  QInput,
  QToggle,
  QIcon,
  QBtn,
  QField,
  QTooltip,
  QPopover,
  QModal,
  QModalLayout,
} from 'quasar'
export default {
  components: {
    QInput,
    QToggle,
    QIcon,
    QField,
    QBtn,
    QTooltip,
    QPopover,
    QModal,
    QModalLayout,
  },
  name: 'page1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: '',
      password: '',
      passwordconfirm: '',
      modalwarning: ''
    }
  },
  computed:
  {
    ...mapGetters([
      'sometext'
    ])
  },
  methods: {
    ...mapActions([
      'pushtext'
    ]),
    nextpage(){
      console.log('inside nextpage()');
      this.$router.push('/page2');
    },
    makeUser(){
      console.log('inside makeUser');
      var self = this;
      if(this.username===''||this.password===''||this.passwordconfirm===''){
        this.modalwarning = "Username, password and password confirm cannot be blank!";
        this.$refs.maximizedModal.open();
      }else{
        axios.post("http://localhost:3000/api/auth/register",{
          email: this.username,
          password: this.password
        })
        .then((response)=>{
          console.log('response from login: ', response.data.error);
          console.log('response from login: ', response);
          if(response.statusText==="Created"){
            localStorage.setItem('userid', response.data.user._id);
            console.log('value of userid in localStorage', localStorage.getItem('userid'));
            this.nextpage();
          }
          if (response.data.error === "That email address is already in use."){
            this.modalwarning = "That email address is already in use there cowperson!";
            this.$refs.maximizedModal.open();
            this.username = '';
            this.password = '';
            this.passwordconfirm = '';
          }
        })
        .catch((error)=>{
          console.log('error from catch: ', error);
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
@import '~variables'

.page1
  position relative

.button1
  position absolute
  top 90%
  height 5%
  left 37.5%
  width 25%

.notauser
  position absolute
  top 85%
  left 37.5%

.button2
  position absolute
  top 78%
  height 5%
  left 3%

.button3
  position absolute
  top 78%
  height 5%
  left 53%

.usernamebar
  position absolute
  height 20%
  top 60%
  width 100%

.passwordbar
  position absolute
  top 70%
  height 20%
  width 100%

.passwordbarconfirm
  position absolute
  top 80%
  height 20%
  width 100%

.splashtitle
  position absolute
  height 10%
  top 2%
  width 100%

.splash
  position relative

.signbuttons
  background-color $warning

.forgotbuttons
  background-color $warning

header
  margin 0
  height 10px
  background-color $primary

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
