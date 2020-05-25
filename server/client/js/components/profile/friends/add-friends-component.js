import addFriendComp from "./add-friend-component.js"

export default {
    props: ["user"],
    data() {
        return {
            friends: null,
            newFriend: "",
        }
    },
   watch: {
       newFriend: function(val){
          if( val ){
              setTimeout(() => { this.wait(val)},1000);
              
          }
       }
   },
    template: `
        <div class="content">
        <h4>Search for a person to add to your friends: </h4>
        <input  v-model="newFriend" > 
        <div v-if="friends">
            <addFriendComp v-for="user in friends"
                v-bind:user="user">
            </addFriendComp>
        </div>
        </div>
    `,
    methods: {
        wait: function(value){
            if (this.newFriend == value) {
                this.search(this.newFriend);
                return;
            }
        },
        search: function(v){
                this.friends = null;
                fetch("/user/search", {
                    credentials: "include",
                    method: "POST", // or 'PUT'
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({query: this.newFriend}),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        this.friends = data;
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
            }
        },
    
    components: {
        addFriendComp
    },
}