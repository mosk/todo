'use strict';

var app = new Vue({
    el: '#app',
    data: {
        todoInputValue: '',
        taskText: '',
        todos: []
    },
    methods: {
        addTask: function() {
            this.taskText = event.target.value;
            this.todos.push(this.taskText);
        },
        deleteTask: function() {

        }
    },
    template: '<main class="todo"><input v-on:change="addTask" type="text" class="todo__input" placeholder="What needs to be done?" v-bind:value="todoInputValue"><ul class="todo__list"><li v-for="todo in todos" class="todo__item">{{ todo }}<button class="button button--delete">Удалить</button></li></ul></main>'
})