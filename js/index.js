var app = new Vue({
    el: '#main',
    data: {
        message: 'Hello Vue!',
        message2: 'This is another test',
        links: [
            {
                name: 'Home',
                location: 'index.html'
            },
            {
                name: 'About',
                location: 'about.html'
            }
        ]
    }
})