var demo = new Vue({
  el: '#demo',
  data: {
      title: 'todos',
      content: 'hellohello',
      todos: [
          {
              done: true,
              content: 'Learn JavaScript',
              detail:'javascript is very hard lang!!!.but lokks like easy. son a bitch.'
          },
          {
              done: false,
              content: 'Learn vue.js',
              detail:'its easy or hard? i cant understand.'
          }
      ]
  }
})
