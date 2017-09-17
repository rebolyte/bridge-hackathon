<template>
  <div class="page6">

    <div v-for="user in users">
      <a href="#/page6" @click="setCurRoom(user.roomId)">{{ user.email || 'ecstatic bear' }}</a>
    </div>

    <div id="conversation"></div>
    <input id="data" style="width:200px;" />
    <input type="button" id="datasend" value="send" />

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import _ from 'lodash'
import axios from 'axios'
import io from 'socket.io-client'
import jquery from 'jquery'
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
  name: 'page6',
  created(){
    console.log('created');
    this.userId = localStorage.getItem('userid')
    this.socket = io.connect('http://localhost:3000');
    let self = this;


    axios.get('http://localhost:3000/api/user/' + this.userId)
    .then((response)=>{
      console.log('user profile: ', response);
      this.userProfile = response.data.user;
    })
    .catch((error)=>{
      console.log('errrrrr: ', error);
    })

    this.socket.on('connect', function(){
      self.geoFindMe();
      setInterval(self.geoFindMe, 30000);

      self.socket.on('peoplenearby', people => {
        self.addDiversityScore(self.userProfile, people);
        console.log('people nearby:', people);
        self.users = people.map(usr => Object.assign(usr, { roomId: `${usr._id}-${self.userId}` }));
      });

    // call the server-side function 'adduser' and send one parameter (value of prompt)
      // when the client emits 'sendchat', this listens and executes
      self.socket.on('sendchat', function(userId, roomId, data){
        console.log(userId, data);
        // we tell the client to execute 'updatechat' with 2 parameters
        io.sockets.in(self.socket.room).emit('updatechat', this.userId, roomId, data);
      });
      self.socket.on('newUser', function(users){
        console.log('newUser:', users);
        // $('#users').empty();
        // $.each(users, function(key, value){
        //   $('#users').append('<div>' + value + '</div>')
        // })
      });

      // listener, whenever the server emits 'updatechat', this updates the chat body
      self.socket.on('updatechat', function (user, roomId, data) {
        console.log('updateChat:', user, roomId, data);
        if (roomId && self.curRoomId) {
          let bothMatch = _.union(roomId.split('-'), self.curRoomId.split('-')).length === 2;
          if (bothMatch) {
            $('#conversation').append('<b>' + user + ':</b> ' + data + '<br>');
          }
        }
      });
      // this is for the users!
      // this.socket.on('updaterooms', function(rooms, current_room) {
      //   console.log('updateRooms:', rooms, current_room);
      // });
      //on page load call this function
      $(function(){
        // when the client clicks SEND
        $('#datasend').click( function() {
          var message = $('#data').val();
          $('#data').val('');
          console.log(this.userId);
          // tell server to execute 'sendchat' and send along one parameter
          self.socket.emit('sendchat', self.userId, self.curRoomId, message);
        });
        // when the client hits ENTER on their keyboard
        $('#data').keypress(function(e) {
          if(e.which == 13) {
            $(this).blur();
            $('#datasend').focus().click();
          }
        });
      });
    });
  },
  // sockets:{
  //   connect: function(){
  //     console.log('socket connected')
  //   },
  //   customEmit: function(val){
  //     console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
  //   }
  // },
  data () {
    return {
      socket: null,
      userId: null,
      userProfile: null,
      users: [],
      curRoomId: null
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
    geoFindMe() {
      let self = this;
        if (!navigator.geolocation){
          console.error('Geolocation not supported in this browser');
          return;
        }

        function geoSuccess(position) {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
          self.socket.emit('location', latitude, longitude, self.userId);

        }

        function geoError() {
          console.error('Error in geo location');
        }
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError, {
          enableHighAccuracy: true,
          maximumAge        : 30000,
          timeout           : 27000
        });
      },
      calcDifferenceScore(userA, userB) {
        return _.difference(_.values(userA.privateInfo), _.values(userB.privateInfo)).length;
      },
      addDiversityScore(user, users) {
        return users.map(usr => {
          usr.diversityScore = this.calcDifferenceScore(user, usr);
        });
      },
      setCurRoom(id) {
        this.curRoomId = id;
        $('#users').empty();
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

.page6
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
