//import moment from '../../../moment/moment.min.js'
export default {
  props: ["not"],
  data(){
    return {
      rem: true,
      show: true
    }
  },
    template: `
  <div v-bind:class="[rem  ? 'notPanel' : 'notPanel slide']" v-show="show" >
     <div v-bind:class="[not.state  ? 'high-bar bg-lightblue' : 'high-bar bg-white']" @click="toParty" v-if="not.event == 'newComment' ">
     <p class="textIn"> {{ not.source.firstName }} {{ not.source.lastName }} posted a comment on the party {{ not.party.name }}</p>
     <div class="date">
         {{ not.time | date }}
      </div>
     </div>
     <div v-bind:class="[not.state ? 'high-bar bg-lightblue' : 'high-bar bg-white']" @click="toParty" v-if="not.event == 'newInvitation'">
      <p class="textIn"> {{ not.source.firstName }} {{ not.source.lastName }} invited you to go to the party {{ not.party.name }}</p>
      <div class="button-div" v-if="not.state == true">
        <button class="btn-primary btn-circle btn-red" id="" @click="declineInvitation" >X</button>
        <button class="btn-primary btn-circle btn-green" id="" @click="acceptInvitation" >&#10003;</button>
      </div>
      <div class="date">
        {{ not.time | date }}
      </div>
     </div>
     <div v-bind:class="[not.state ? 'high-bar bg-lightblue' : 'high-bar bg-white']" v-if="not.event == 'newFriend' ">
      <p class="textIn"> {{ not.source.firstName }} {{ not.source.lastName }} sent you a friend request</p>
      <div class="button-div" v-if="not.state == true" >
        <button class="btn-primary btn-circle btn-red" id="" @click="declineFriend" >X</button>
        <button class="btn-primary btn-circle btn-green" id="" @click="acceptFriend" >&#10003;</button>
       </div>
        <div class="date">
         {{ not.time | date }}
        </div>
     
     </div>
     <div v-bind:class="[not.state  ? 'high-bar bg-lightblue' : 'high-bar bg-white']" @click="toParty" v-if="not.event == 'joined' ">
        <p class="textIn"> {{ not.source.firstName }} {{ not.source.lastName }} just joined the party {{ not.party.name }}</p>
        <div class="date">
         {{ not.time | date }}
      </div>
     </div>
     <div @click="mark" v-bind:class="[not.state  ? 'high-bar bg-lightblue' : 'high-bar bg-white']" v-if="not.event == 'accept' ">
      <p class="textIn"> {{ not.source.firstName }} {{ not.source.lastName }} accepted your friend request</p>
      <div class="date">
        {{ not.time | date }}
      </div>
     </div>
     <button v-if="rem" class="btn-default btn-circle btn-delete" id="" @click="remove">X</button>
  </div>
    `,
  filters: {
    date: function (value) {
      if (value) {
        console.log(moment(value).format('LLLL'))
        return moment(String(value)).format('LLLL')
      }
    }
  },

    methods: {

      remove: function(){
        this.rem = false;
        setTimeout(() => this.show = false, 1500);
        fetch('/notifications/destroy', {
          credentials: 'same-origin',
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: this.not.id }),
        })
          .then(response => response.json())
          .then(data => {
          })
          .catch((error) => {
            console.error('Error:', error);
          });

      },

      acceptInvitation: function(){
        fetch('/parties/response', {
          credentials: 'same-origin',
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: this.not.party.id, decision: "accepted" }),
        })
          .then(response => response.json())
          .then(data => {
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        this.mark();
      },
      declineInvitation: function() {
        fetch('/parties/response', {
          credentials: 'same-origin',
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: this.not.party.id, decision: "rejected" }),
        })
          .then(response => response.json())
          .then(data => {
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        this.mark();
      },
      acceptFriend: function() {
        fetch('/friends/response', {
          credentials: 'same-origin',
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ dstId: this.not.source.id, decision: "accepted" }),
        })
          .then(response => response.json())
          .then(data => {
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        this.mark();
      },
      declineFriend: function() {
        fetch('/friends/response', {
          credentials: 'same-origin',
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ dstId: this.not.source.id, decision: "rejected" }),
        })
          .then(response => response.json())
          .then(data => {
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        this.mark();
      },
      toParty: function(){
        return true;
      },
      mark: function(){
       if (this.not.state == true){
        fetch('/notifications/mark', {
          credentials: 'same-origin',
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({id: this.not.id }),
        })
          .then(response => response.json())
          .then(data => {
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        this.not.state = false;
        }
      }
      
    },
    components: {}
};
