'use strict';

var app = new Vue({
    el: '#app',
    data: {
        todoInputValue: '',
        taskText: '',
        todos: ['1', '2']
    },
    components: {
        todol: {
            data: function() {
                return {todos}
            },
            template: '<ul class="todo__list"><li v-for="todo in todos" class="todo__item">{{ todo }}</li></ul>'
        }
    },
    methods: {
        addTask: function() {
            this.taskText = event.target.value;
            this.todos.push(this.taskText);
        }
    }
})