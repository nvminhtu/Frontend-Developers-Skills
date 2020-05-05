var app1 = new Vue({
    el: '#app-1',
    data: {
        seen : true
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        brand : 'Honda',
        items : [
            { model : 'Vision' },
            { model : 'Airblade' },
            { model : 'SH Mode' }
        ]
    }
})

var app4 = new Vue({
    el : '#app-4',
    data : {
        countries: [
            { name : 'Vietnam' },
            { name : 'Malaysia' },
            { name : 'Singapore' },
            { name : 'Thailand' }
        ]
    }
});


var app5 = new Vue({
    el: '#app-5',
    data : {
        message: 'Hello, welcome to Vue.js!'
    },
    methods: {
        daoMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data : {
        message: 'Hello Vue here!!!'
    }
})

// * Write Compontent **//
Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
})

var app7 = new Vue({
    el: '#app-7'
})