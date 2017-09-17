<template>
  <div id="list" class="layout-padding row justify-center">
    <div style="max-height:100%; overflow-y: auto;">
      <q-list highlight id="qList" class="max-height:500px;" v-for="(item, index) in items.data" v-bind:style='{fontSize: "3.5vh", fontWeight: "bold", backgroundColor: "rgba(250,250,250,0.9)"}'>
        <q-item v-on:click="select(item)">
          <q-item-side>
            <q-item-tile avatar>
              <img src="http://via.placeholder.com/350x150" />
            </q-item-tile>
          </q-item-side>
          <q-item-main
                    v-for="dialog in types"
                    :key="dialog"
                    @click="dialog.handler(stringarray[index])"
                    v-ripple.mat
          >
             <q-item-tile label>{{item.email}}</q-item-tile>
             <q-item-tile sublabel>{{item.role}}</q-item-tile>
         </q-item-main>
         <q-item-side right stamp="10% match" />
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {
  QList,
  Dialog,
  QListHeader,
  QItem,
  QItemSeparator,
  QItemSide,
  QItemMain,
  Toast,
  QItemTile,
  QChip,
  Ripple,
  QPopover
} from 'quasar'
export default {
  components: {
    QList,
    QListHeader,
    QItem,
    QItemSeparator,
    QItemSide,
    QItemMain,
    QItemTile,
    QChip,
    Toast,
    QPopover
  },
  name: 'page5',
  data(){
    return {
      personnumber: null,
      items : [],
      indexnumber: 0,
      showinterests: '',
      stringarray: [],
      pushing: null,
      types: [
       {
         label: 'Confirm',
         icon: 'done_all',
         handler (showinterests) {
           Dialog.create({
             title: 'Confirm',
             message: `Hey! This person likes: ${showinterests===""?'nada':showinterests}` ,
             buttons: [
               {
                 label: `Meet Them!`,
                 handler () {
                  //  console.log('yo');
                  //  this.$router.push('/page6')
                  //  close(() => {
                  //    console.log('yo');
                  //    this.$router.push('/page6')
                  //  })
                 }
               },
               {
                 label: 'Nah bruv...',
                 handler () {
                   return false;
                  //  Toast.create('Agreed!')
                 }
               }
             ]
           })
         }
       }
     ]
    }
  },
  created(){
    this.fetchData();
  },
  watch: {
    pushing: function(val, old){
      console.log('new value of pushing', val);
    }
  },
  methods : {
    pushpage(){
      console.log('inside pushpage');
      this.$router.push('/page6')
    },
    fetchData: function(){
      axios.get("http://localhost:3000/api/user/")
      .then((response)=>{
        this.items = response;
        console.log(response, this.items.data);
        var temparray = [];
        this.items.data.forEach(item=>{
          var tempstring = '';
          console.log("value of item: ", item);
          item.interests.forEach((interest)=>{
            tempstring = tempstring + " " +  interest.name
          })
          temparray.push(tempstring)
        })
        this.stringarray = temparray;
        console.log("string array : ", this.stringarray);
      })
      .catch((error)=>{
        console.log('error value is: ', error);
      })
    },
    select: function(item) {
        this.personnumber = item._id;
        var temparray = '';
        item.interests.forEach((interest)=>{
          temparray = temparray + " " +  interest.name
        })
        this.showinterests = temparray;
        console.log(this.showinterests);
        console.log(item._id);

        // targetId = event.currentTarget.id;
        // console.log(targetId); // returns 'foo'
    }
  }
}
</script>
