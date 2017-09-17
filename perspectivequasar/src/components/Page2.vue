<template>
  <div class="page2">
    <div class='toplogo' v-bind:style='{ position: "absolute", top: "5%", left: "43%", height: "14%", width: "15%"}'/>
    <div class='usernamebar1'>
      <q-select
          v-model="selectAgeGroup"
          :options="optionsAgeGroup"
        />
    </div>
    <div class='usernamebar2'>
      <q-select
          v-model="selectGender"
          :options="optionsGender"
        />
    </div>
    <div class='usernamebar3'>
      <q-select
          v-model="selectCountry"
          :options="optionsCountry"
        />
    </div>
    <div class='usernamebar4'>
      <q-select
          v-model="selectRace"
          :options="optionsRace"
        />
    </div>
    <div class='checkboxlgbtq'>
       <q-checkbox v-model="checklgtbq" color="secondary" label="Identify as LGTBQ+" />
    </div>
    <div class='submitbutton'>
      <q-btn class='submitbutton2' @click='submitmethod()'>Submit</q-btn>
    </div>
    <div class='skipbutton'>
      <div class='skipbutton2' @click='skipmethod()'>Skip</div>
      <!-- <q-btn class='skipbutton2' @click='skipmethod()'>Skip</q-btn> -->
    </div>
    <q-modal ref="maximizedModal" maximized :content-css="{padding: '50px'}">
      <h4>Hey You!</h4><p>{{modalwarning}}</p>
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
  QModal,
  QModalLayout,
  QSelect,
  QCheckbox,
  QTooltip,
  QPopover
} from 'quasar'
// import '../docs-input.styl'
export default {
  components: {
    QInput,
    QSelect,
    QField,
    QToggle,
    QModal,
    QModalLayout,
    QIcon,
    QBtn,
    QCheckbox,
    QTooltip,
    QPopover
  },
  name: 'page2',
  beforeCreate(){
    axios.get("http://localhost:3000/api/user/"+localStorage.getItem('userid'))
    .then((response)=>{
      console.log('response value is: ', response);
      console.log('ageGroup', response.data.user.privateInfo===undefined);
      if(response.data.user.privateInfo!==undefined){
          this.selectAgeGroup = response.data.user.privateInfo.ageGroup;
          this.selectCountry = response.data.user.privateInfo.country;
          this.selectGender = response.data.user.privateInfo.gender;
          this.checklgtbq = response.data.user.privateInfo.lgtbq;
          this.selectRace = response.data.user.privateInfo.race
      }
    })
    .catch((error)=>{
      console.log('error value is: ', error);
    })
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      checklgtbq: false,
      username: '',
      password: '',
      passwordconfirm: '',
      selectAgeGroup: 'ag',
      selectGender: 'g',
      selectCountry: 'c',
      selectRace: 'r',
      modalwarning: '',
      sendAgeGroup: null,
      sendGender: null,
      sendCountry: null,
      sendRace: null,
      optionsAgeGroup: [
        {
          label: 'Age Group',
          value: 'ag'
        },
        {
          label: '18-25',
          value: '25'
        },
        {
          label: '25-30',
          value: '30'
        },
        {
          label: '30-50',
          value: '50'
        },
        {
          label: '50-65',
          value: '65'
        },
        {
          label: '65+',
            value: '65+'
        },
        {
          label: 'Immortal',
          value: 'im'
        },
        {
          label: "Don&#39;t want to say",
          value: "-1"
        }
      ],
      optionsGender: [
        {
          label: 'Gender',
          value: 'g'
        },
        {
          label: 'boy',
          value: 'b'
        },
        {
          label: 'girl',
          value: 'gi'
        },
        {
          label: 'transgender',
          value: 'tg'
        },
        {
          label: 'nonbinary',
          value: 'nb'
        },
        {
          label: 'martian',
          value: 'm'
        },
        {
          label: "Dont&#39;t want to say",
          value: "-1"
        }
      ],
      optionsCountry: [
        {
          label: 'Continent',
          value: 'c'
        },
        {
          label: 'North America',
          value: 'na'
        },
        {
          label: "Latin America",
          value: 'la'
        },
        {
          label: 'Asia',
          value: 'as'
        },
        {
          label: 'Africa',
          value: 'af'
        },
        {
          label: 'Europe',
          value: 'eu'
        },
        {
          label: 'Atlantis',
          value: 'at'
        },
        {
          label: "Dont&#39;t want to say",
          value: "-1"
        }
      ],
      optionsRace: [
        {
          label: 'Color',
          value: 'r'
        },
        {
          label: 'White',
          value: 'w'
        },
        {
          label: 'Black',
          value: 'bl'
        },
        {
          label: 'Orange',
          value: 'or'
        },
        {
          label: 'Brown',
          value: 'br'
        },
        {
          label: 'Purple',
          value: 'pu'
        },
        {
          label: 'Lizard Person',
          value: 'lp'
        },
        {
          label: "Dont&#39;t want to say",
          value: "-1"
        }
      ]
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
    submitmethod(){
      // localhost:3000/api/user/59bd568c16899434b72c71ed
      console.log('value of selectgender: ', this.selectGender);
      console.log('value of this.selectAgeGroup: ', this.selectAgeGroup);
      console.log('value of this.selectCountry: ', this.selectCountry);
      console.log('value this.selectRace: ', this.selectRace);

      if(this.selectGender==='g'||this.selectAgeGroup==='ag'||this.selectCountry==='c'||this.selectRace==='r'){
        this.modalwarning = 'Please select a value for each area or say, "Nah, I do not want to answer". You can also skip this section and fill it in some other time.'
        this.$refs.maximizedModal.open();
      }else{
        var url = "http://localhost:3000/api/user/"+localStorage.getItem('userid');

        console.log('url is : ', url);

        axios.patch(url, {
          privateInfo: {
            ageGroup: this.selectAgeGroup,
            gender: this.selectGender,
            country: this.selectCountry,
            race: this.selectRace,
            lgtbq: this.checklgtbq
          }
        })
        .then((response)=>{
          console.log('response from patch is ', response);
          this.$router.push('/page3')
        })
        .catch(()=>{
          console.log('error from patch is ', error);
        })
      }
    },
    skipmethod(){
      this.$router.push('/page3')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
@import '~variables'


.page2
  position relative
  background url('../statics/onboarding-1-bg.jpg')
  background-size cover
  background-repeat no-repeat

.toplogo
  background url('../statics/logo-icon.png')
  background-size cover
  background-repeat no-repeat

.submitbutton
  position absolute
  right 45%
  width 30%
  top 85%

.skipbutton
  position absolute
  right 45%
  top 92.5%


.submitbutton2
  background-color $warning
  width 180%


.skipbutton2
  color blue
  text-decoration underline

.page3
  position relative

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

.usernamebar1
  position absolute
  height 20%
  top 25%
  left 10%
  width 80%

.usernamebar2
  position absolute
  height 20%
  top 35%
  left 10%
  width 80%

.usernamebar3
  position absolute
  height 20%
  top 45%
  left 10%
  width 80%

.usernamebar4
  position absolute
  height 20%
  top 55%
  left 10%
  width 80%

.passwordbar
  position absolute
  top 50%
  height 20%
  width 100%

.passwordbarconfirm
  position absolute
  top 65%
  height 20%
  width 100%

.checkboxlgbtq
  position: absolute
  top 70%
  left 25%



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
