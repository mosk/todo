'use strict';

var app5 = new Vue({
  el: '#app-1',
  data: {
    message: 'Проверка'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})