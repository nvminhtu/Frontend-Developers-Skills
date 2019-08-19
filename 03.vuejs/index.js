var app4 = new Vue({
    el : '#app-4',
    data : {
        todos: [
            { text : 'Vietnam' },
            { text : 'Malaysia' },
            { text : 'Singapore' },
            { text : 'Thailand' }
        ]
    }
});

var app1 = new Vue({
    el: '#app-1',
    data : {
        seen : true
    }
});

var app2 = new Vue({
    el: '#app-2',
    data : {
        parentMessage : 'Parent',
        items: [
            { message : 'One Piece' },
            { message : 'Dragon Fighter Z' }
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data : {
        rawHtml : '<span style="color:red">Amazing Cool</span>'
    }
})


var app6 = new Vue({
    el: '#app-6',
    data: {
        name : 'Torress',
        age : 19,
        from : 'Dong Nai'
    }
})