var app = new Vue({
    el: '#main',
    data: {
        projects: [
            {
                name: '* MAMP Localhost Customization',
                location: 'https://github.com/nmoore14/MAMP_Localhost_Customization',
                source: 'https://github.com/nmoore14/MAMP_Localhost_Customization',
                category: 'pro',
                completed: false,
                featured: false
            },
            {
                name: 'Guess-A-Number V1',
                location: 'projects/fun/Guess-A-Number_v1/index.html',
                source: 'https://github.com/nmoore14/Fall_2018_School/tree/master/WEBT%202300%20-%20Client%20Side%20Programming/Projects/NickMoore_Exam1',
                category: 'fun',
                completed: true,
                featured: true
            },
            {
                name: 'Monster Slayer',
                location: 'projects/fun/Monster-Slayer/index.html',
                source: 'https://github.com/nmoore14/nmoore14.github.io/tree/master/projects/fun/Monster-Slayer',
                category: 'fun',
                completed: true,
                featured: true
            },
            {
                name: 'Wonderful Quotes',
                location: 'https://github.com/nmoore14/Wonderful-Quotes',
                source: 'https://github.com/nmoore14/Wonderful-Quotes',
                category: 'pro',
                completed: true,
                featured: true
            },
        ]
    }
})