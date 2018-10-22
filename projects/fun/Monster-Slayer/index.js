new Vue({
    el: '#app',
    data: {
        user: 100,
        monster: 100,
        playing: false,
        gameLog: [],
        username: '',
        monsterName: '',
        monsters: ['MadMother', 'Upset Wife', 'Deranged Yorkie', 'Sinister Sister-In-Law', 'Senile Supervisor'],
        healCount: 3,
        disabled: false
    },
    computed: {
        userHealth: function () {
            return {
                width: this.user + '%'
            }
        },
        monsterHealth: function () {
            return {
                width: this.monster + '%'
            }
        }
    },
    methods: {
        startGame: function () {
            this.username = prompt('Please enter your name:', '');
            monsterSelect = prompt('Please select a monster. \n0 - MadMother\n1 - Upset Wife\n2 - Deranged Yorkie\n3 - Sinister Sister-In-Law\n4 - Senile Supervisor', '');
            this.monsterName = this.monsters[monsterSelect];

            this.playing = !this.playing;
        },
        selectMonster: function () {
            if (this.monsterName == '') {
                monsterSelect = prompt('Please select a monster. \n0 - MadMother\n1 - Upset Wife\n2 - Deranged Yorkie\n3 - Sinister Sister-In-Lay\n4 - Senile Supervisor', '');
                this.monsterName = this.monsters[monsterSelect];
            }
            console.log("This is a test to see if this push worked.");
        },
        lowerMonsterHealth: function () {
            var userHit = Math.floor(Math.random() * 10) + 1;
            this.monster -= userHit;
            this.gameLog.push(this.username + " hits monster for " + userHit);
        },
        specialUserAttack: function () {
            var userSpecial = Math.floor(Math.random() * 25) + 10;
            this.monster -= userSpecial;
            this.gameLog.push(this.username + " uses special for " + userSpecial);
        },
        userHeal: function () {
            if (this.user < 100) {
                var userGap = 100 - this.user;
                var userAdd = Math.floor(Math.random() * 15) + 5;
                if (userGap > userAdd) {
                    this.user += userAdd;
                    this.gameLog.push(this.username + " heals for " + userAdd);
                } else {
                    this.user += userGap;
                    this.gameLog.push(this.username + " heals for " + userGap);
                }
                this.healCount -= 1;
            }
        },
        monsterLowAttack: function () {
            var monsterHit = Math.floor(Math.random() * 10) + 1;
            this.user -= monsterHit;
            this.gameLog.push("Monster hits " + this.username + " for " + monsterHit);
        },
        specialMonsterAttack: function () {
            var monsterSpecial = Math.floor(Math.random() * 25) + 10;
            this.user -= monsterSpecial;
            this.gameLog.push("Monster uses special for " + monsterSpecial);
        },
        giveUp: function () {
            this.monster = 100;
            this.user = 100;
            this.playing = !this.playing;
            alert("You have given up.");
        }
    },
    watch: {
        monster: function () {
            if (this.monster <= 0) {
                alert("YOU WIN");
                this.monster = 100;
                this.user = 100;
                this.playing = !this.playing;
                this.gameLog = [];
                this.username = '';
                this.monsterName = '';
                this.healCount = 3;
            }
        },
        user: function () {
            if (this.user <= 0) {
                alert("YOU GOT SLAUGHTERED");
                this.monster = 100;
                this.user = 100;
                this.playing = !this.playing;
                this.gameLog = [];
                this.username = '';
                this.monsterName = '';
                this.healCount = 3;
            }
        },
        userHeal: function () {
            if (this.healCount <= 0) {
                return this.disabled = true;
            }
        }
    }
})
