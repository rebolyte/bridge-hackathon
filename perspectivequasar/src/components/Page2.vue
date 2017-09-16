<template>
  <div class="page2">
    <div class='usernamebar'>
      <q-select
          v-model="selectAgeGroup"
          :options="optionsAgeGroup"
        />
      <q-select
          v-model="selectGender"
          :options="optionsGender"
        />
      <q-select
          v-model="selectCountry"
          :options="optionsCountry"
        />
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
      <q-btn class='skipbutton2' @click='skipmethod()'>Skip</q-btn>
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
    QIcon,
    QBtn,
    QCheckbox,
    QTooltip,
    QPopover
  },
  name: 'page2',
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
    ])
  },
  makeUser(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus'>
@import '~variables'

.submitbutton
  position absolute
  left 5%
  top 70%

.skipbutton
  position absolute
  left 5%
  top 76%


.submitbutton2
  background-color $neutral

.skipbutton2
  background-color $warning

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

.usernamebar
  position absolute
  height 20%
  top 34%
  width 100%

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
