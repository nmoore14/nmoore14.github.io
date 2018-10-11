var app = new Vue({
    el: '#main',
    data: {
        pro: [
            {
                name: '* MAMP Localhost Customization',
                location: 'https://github.com/nmoore14/MAMP_Localhost_Customization',
                source: 'https://github.com/nmoore14/MAMP_Localhost_Customization',
                completed: false
            }
        ],
        fun: [
            {
                name: 'Guess-A-Number V1',
                location: 'projects/fun/Guess-A-Number_v1/index.html',
                source: 'https://github.com/nmoore14/Fall_2018_School/tree/master/WEBT%202300%20-%20Client%20Side%20Programming/Projects/NickMoore_Exam1',
                completed: true
            }
        ]
    },
    mounted: [
        function() {
            alert("This is a work in progress.");
        },
        function() {
            alert("This is a test")
        }
    ]
})