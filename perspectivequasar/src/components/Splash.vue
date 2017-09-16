<template>
  <div class="splash">
    <div class='splashtitle' v-bind:style='{fontSize:"4vh", height: "10%", margin: "0%"}'>
      Hello and Welcome to Perspect😆Iv
    </div>
    <div class='usernamebar'>
      <q-input v-model='username' v-bind:style='{fontSize: "2vh", width: "60%", left: "20%", height: "10%"}' float-label="Enter Username" placeholder="Platypus"/>
    </div>
    <div class='passwordbar'>
      <q-input v-model="password" v-bind:style='{fontSize: "2vh", width: "60%", left: "20%", height: "10%"}' float-label="Enter Password" placeholder="Secret" type="password"/>
    </div>
    <q-btn class='signbuttons button1' @click="signInMethod">Sign In</q-btn>
    <div class='notauser'>
      <p>
        not a user?
      </p>
      <q-btn class='signbuttons' @click="signUpMethod">Sign Up</q-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {
  QInput,
  QToggle,
  QIcon,
  QBtn,
  QField,
  QTooltip,
  QPopover
} from 'quasar'
export default {
  components: {
    QInput,
    QToggle,
    QIcon,
    QField,
    QBtn,
    QTooltip,
    QPopover
  },
  name: 'splash',
  data () {
    return {
      username:'',
      password: '',
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
    signInMethod(){
      console.log('inside signInMethod');
    },
    signUpMethod(){
      console.log('inside signUpMethod');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus'>
@import '~variables'

.button1
  position absolute
  top 78%
  height 5%
  left 37.5%

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
  top 34%
  width 100%

.passwordbar
  position absolute
  top 56%
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
  background-color $neutral

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
