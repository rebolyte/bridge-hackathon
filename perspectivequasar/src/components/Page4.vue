<template>
  <div class="page4">
    <div v-bind:style='{fontSize: "3.5vh", fontWeight: "bold", position: "absolute", top: "3%", left: "5%"}'>
        Click Interest Tags to Say you like it!
    </div>

    <div class='interest1' v-on:click="clickmethod(1)" v-bind:style="{position: 'absolute', width: '15%', height: '8%', top: '15%', left: '15%', backgroundColor: click1===true?'rgba(200,100,0,1)': 'rgba(200,150,100,1)', color: 'blue'}">
      {{interestarray[0]['name']}}
    </div>
    <div class='interest2' v-on:click="clickmethod(2)" v-bind:style="{position: 'absolute', width: '15%', height: '8%', top: '15%', left: '35%', backgroundColor: click2===true?'rgba(200,100,0,1)': 'rgba(200,150,100,1)', color: 'blue'}">
      {{interestarray[1]['name']}}
    </div>
    <div class='interest3' v-on:click="clickmethod(3)" v-bind:style="{position: 'absolute', width: '15%', height: '8%', top: '15%', left: '55%',backgroundColor: click3===true?'rgba(200,100,0,1)': 'rgba(200,150,100,1)', color: 'blue'}">
      {{interestarray[2]['name']}}
    </div>
    <div class='interest4'  v-on:click="clickmethod(4)" v-bind:style="{position: 'absolute', width: '15%', height: '8%', top: '15%', left: '75%', backgroundColor: click4===true?'rgba(200,100,0,1)': 'rgba(200,150,100,1)', color: 'blue'}">
      {{interestarray[3]['name']}}
    </div>

    <div class='interest5' v-on:click="clickmethod(5)" v-bind:style="{position: 'absolute', width: '15%', height: '8%', top: '25%', left: '15%', backgroundColor: click5===true?'rgba(200,100,0,1)': 'rgba(200,150,100,1)', color: 'blue', wordWrap: 'break-word'}">
      {{interestarray[4]['name']}}
    </div>
    <div class='interest6'  v-on:click="clickmethod(6)" v-bind:style="{position: 'absolute', width: '15%', height: '8%', top: '25%', left: '35%', backgroundColor: click6===true?'rgba(200,100,0,1)': 'rgba(200,150,100,1)', color: 'blue', wordWrap: 'break-word'}">
      {{interestarray[5]['name']}}
    </div>
    <div class='interest7'  v-on:click="clickmethod(7)" v-bind:style="{position: 'absolute', width: '15%', height: '8%', top: '25%', left: '55%', backgroundColor: click7===true?'rgba(200,100,0,1)': 'rgba(200,150,100,1)', color: 'blue', wordWrap: 'break-word'}">
      {{interestarray[6]['name']}}
    </div>
    <div class='interest8'  v-on:click="clickmethod(8)" v-bind:style="{position: 'absolute', width: '15%', height: '8%', top: '25%', left: '75%', backgroundColor: click8===true?'rgba(200,100,0,1)': 'rgba(200,150,100,1)', color: 'blue', wordWrap: 'break-word'}">
      {{interestarray[7]['name']}}
    </div>

    <div class='interest9'  v-on:click="clickmethod(9)" v-bind:style="{position: 'absolute', width: '15%', height: '8%', top: '35%', left: '15%',backgroundColor: click9===true?'rgba(200,100,0,1)': 'rgba(200,150,100,1)', color: 'blue', wordWrap: 'break-word'}">
      {{interestarray[8]['name']}}
    </div>
    <div class='interest10'  v-on:click="clickmethod(10)" v-bind:style="{position: 'absolute', width: '15%', height: '8%', top: '35%', left: '35%', backgroundColor: click10===true?'rgba(200,100,0,1)': 'rgba(200,150,100,1)', color: 'blue', wordWrap: 'break-word'}">
      {{interestarray[9]['name']}}
    </div>
    <div class='interest11'  v-on:click="clickmethod(11)" v-bind:style="{position: 'absolute', width: '15%', height: '8%', top: '35%', left: '55%',backgroundColor: click11===true?'rgba(200,100,0,1)': 'rgba(200,150,100,1)', color: 'blue', wordWrap: 'break-word'}">
      {{interestarray[10]['name']}}
    </div>
    <div class='interest12'  v-on:click="clickmethod(12)" v-bind:style="{position: 'absolute', width: '15%', height: '8%', top: '35%', left: '75%', backgroundColor: click12===true?'rgba(200,100,0,1)': 'rgba(200,150,100,1)', color: 'blue', wordWrap: 'break-word'}">
      {{interestarray[11]['name']}}
    </div>

    <div v-bind:style='{position: "absolute", width: "100%", fontSize: "3vh", top: "70%"}'>
      You like {{numberthings}} things!
    </div>

    <q-btn class='nextbutton button1' @click="nextMethod">Next</q-btn>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import _ from 'lodash'
import axios from 'axios'
import {
  QInput,
  QToggle,
  QIcon,
  QBtn,
  QField,
  Toast,
  QSelect,
  QCarousel,
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
    QCarousel,
    QToggle,
    QIcon,
    QBtn,
    QCheckbox,
    Toast,
    QTooltip,
    QPopover
  },
  name: 'page3',
  created(){

    axios.get('http://localhost:3000/api/interest/interests')
    .then((response)=>{
      console.log('response from interests: ', response);
      this.chunkedinterests = _.chunk(response.data.interests, 3);
      var temparray = [];
      response.data.interests.forEach((interest)=>{
        temparray.push(interest)
      })
      this.interestarray = temparray;
      console.log('interestarray: ', this.interestarray);
      console.log('interestarray[0][0]: ', this.interestarray[0]['name']);
    })
    .catch((error)=>{
      console.log('error from interests: ', error);
    })

    var checkit = _.chunk(['a', 'b', 'c', 'd'], 2);
    console.log('checkit: ', checkit);
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      checklgtbq: false,
      chunkedinterests: [],
      interestarray: [],
      username: '',
      password: '',
      passwordconfirm: '',
      numberthings: 0,
      selectAgeGroup: 'ag',
      selectGender: 'g',
      selectCountry: 'c',
      selectRace: 'r',
      sendinterestarray: [],
      click1: false,
      click2: false,
      click3: false,
      click4: false,
      click5: false,
      click6: false,
      click7: false,
      click8: false,
      click9: false,
      click10: false,
      click11: false,
      click12: false,
      feelingarray: [
        'feisty',
        'gassy',
        'bitey',
        'goodhairday',
        'fabtabulous',
        'wonky',
        'urbane',
        'felicitous',
        'bouyant',
        'recyclable',
        'thatfeelingwhenyouwanttosmellsomethingreallybadeventhoughyouknowitwillbebad',
        'Rocky, just Rocky',
        'tingly',
        'electrostatic',
      ],
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
      console.log('inside submitmethod');
    },
    nextMethod(){
      axios.patch('http://localhost:3000/api/user/'+localStorage.getItem('userid'),{
        'interests': this.sendinterestarray
      })
      .then((response)=>{
        this.$router.push('/page5')
      })
      // this.$router.push('/page5')
    },
    clickmethod(number){
      if (number === 1){
        this.click1 = !this.click1
        this.sendinterestarray.push(this.interestarray[0]["_id"])
      }
      if (number === 2){
        this.click2 = !this.click2
        this.sendinterestarray.push(this.interestarray[1]["_id"])
      }
      if (number === 3){
        this.click3 = !this.click3
        this.sendinterestarray.push(this.interestarray[2]["_id"])
      }
      if (number === 4){
        this.click4 = !this.click4
        this.sendinterestarray.push(this.interestarray[3]["_id"])
      }
      if (number === 5){
        this.click5 = !this.click5
        this.sendinterestarray.push(this.interestarray[4]["_id"])
      }
      if (number === 6){
        this.click6 = !this.click6
        this.sendinterestarray.push(this.interestarray[5]["_id"])
      }
      if (number === 7){
        this.click7 = !this.click7
        this.sendinterestarray.push(this.interestarray[6]["_id"])
      }
      if (number === 8){
        this.click8 = !this.click8
        this.sendinterestarray.push(this.interestarray[7]["_id"])
      }
      if (number === 9){
        this.click9 = !this.click9
        this.sendinterestarray.push(this.interestarray[8]["_id"])
      }
      if (number === 10){
        this.click10 = !this.click10
        this.sendinterestarray.push(this.interestarray[9]["_id"])
      }
      if (number === 11){
        this.click11 = !this.click11
        this.sendinterestarray.push(this.interestarray[10]["_id"])
      }
      if (number === 12){
        this.click12 = !this.click12
        this.sendinterestarray.push(this.interestarray[11]["_id"])
      }
      this.numberthings = this.numberthings + 1;
    },
    skipmethod(){
      console.log('inside skipmethod');
    },
    animalfeeling(){
      console.log('inside animalfeeling');
      var number = Math.ceil(Math.random()*this.feelingarray.length)
      return this.feelingarray[number];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
@import '~variables'

.page3
  position relative

.page4
  position relative

.submitbutton3
  position absolute
  left 5%
  top 90%

.skipbutton3
  position absolute
  left 30%
  top 90%

.animalcaption
  position absolute
  left 5%
  top 15%


.submitbutton2
  background-color $neutral

.skipbutton2
  background-color $warning

.button1
  position absolute
  top 78%
  height 5%
  left 25%
  width 50%
  background-color $warning

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

.carouselholder
  position absolute
  height 40%
  top 25%
  width 100%
  text-align center

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
  top 65%
  left 0%

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
