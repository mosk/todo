'use strict';

var app = new Vue({
    el: '#app',
    data: {
        todoInputValue: '',
        todoList: [],
        taskText: ''
    },
    methods: {
        addTask: function() {
            this.taskText = event.target.value;
            this.todoList.push(this.taskText);
        }
    }
})