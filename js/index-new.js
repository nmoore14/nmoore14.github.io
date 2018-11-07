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
                featured: false
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
            {
                name: 'Calculator',
                location: 'projects/learning/calculator',
                source: 'https://github.com/nmoore14/Fall_2018_School/tree/master/WEBT%202300%20-%20Client%20Side%20Programming/Projects/Project3-Calculator',
                category: 'pro',
                completed: false,
                featured: true
            },
        ],
        resume: {
            title: 'Nicholas Moore',
            subTitle: 'Graphic Artist / Web Developer',
            expertise: ['Adobe Creative Suite Collections', 'Microsoft Office Collections', 'HTML, CSS, JavaScript, Vue, PHP', 'Mac and PC graphic design tools'],
            education: [
                {
                    school: 'Northeast State Community College',
                    location: 'Blountville, TN',
                    attended: '2016-current',
                    relatedCourses: ['Concepts of Computer Applications', 'Essentials of Web Development', 'Visual BASIC', 'SQL Fundamentals', 'Introduction to Networking', 'Introduction to Scripting Language', 'Java 1', 'JavaScript', 'A+ Hardware and Software']
                }
            ]
        }
    }
})