var baseURL = 'https://m0a-s-sandbox.firebaseio.com/',
    Chats   = new Firebase(baseURL + 'chats')

Chats.on('child_added', function (snapshot) {
    var message = snapshot.val()
    message.id = snapshot.name()
    app.chats.push(message)
})

Chats.on('child_changed', function (snapshot) {
  var id = snapshot.name()
  console.log('child_changed:'+snapshot.name());
  app.chats.some(function(message) {
        if (message.id === id) {
            message.body = snapshot.val().body
            return true
        }
    })
})



var app = new Vue({
    el: '#app',
    data: {
        chats: [],
        newMessage: {
            name: '',
            body: ''
        },
    },
    methods: {
        addMessage: function (e) {
            e.preventDefault()
            console.log(this)
            Chats.push(this.newMessage)
            this.newMessage.body = ''
        },
        changeMessage: function (message) {
            //Chats[message.id] = message.body
            Chats.child(message.id).child('body').set(message.body)

           //this.newMessage.body = ''
        },

    }
})
