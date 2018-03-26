/* Objects */
projectObject = [
    { 
        pName: "rishabh3112.github.io",
        pImage: "https://i.amz.mshcdn.com/UrglC-VaGtayZZrrqiMZbgfAmME=/fit-in/850x850/https%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2F20-beautiful-minimalist-wallpapers-for-a-simpler-desktop%2F01.jpg",
        pDescription: "A Portfolio website with many features!!"
    },
    { 
        pName: "rishabh3112.github.io",
        pImage: "https://cdn.dribbble.com/users/780072/screenshots/2227157/attachments/414102/Blood.png",
        pDescription: "A Portfolio website with many features!!"
    },
    { 
        pName: "rishabh3112.github.io",
        pImage: "https://i.amz.mshcdn.com/nSm1cpee5fBfp5Tg_n1o1M5Da2o=/fit-in/850x850/https%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2F20-beautiful-minimalist-wallpapers-for-a-simpler-desktop%2F15.jpg",
        pDescription: "A Portfolio website with many features!!"
    },
    { 
        pName: "rishabh3112.github.io",
        pImage: "https://avante.biz/wp-content/uploads/Minimal-Wallpaper/Minimal-Wallpaper-007.jpg",
        pDescription: "A Portfolio website with many features!!"
    }

];

var skillObject = [
    { text: "HTML/CSS" },
    { text: "Javascript"},
    { text: "C++"},
    { text: "SQL"}
];

/* Vue components */
Vue.component("project",{
    props:['name','description','image'],
    template: '<div class="card">'
                +'<img class="card-img-top" :src="image" :alt="name">'
                +'<div class="card-body">'
                +'<h5 class="card-title">{{ name }}</h5>'
                +'<p class="card-text">{{ description }}</p>'
                +'</div>'
                +'</div>'
});


/* Vue instances */

var list = new Vue({
    el: "#list",
    data:{
        skills:skillObject
    },
    
});

var projects = new Vue({
    el:"#pContainer",
    data:{
        projects: projectObject
    }
});
var count=0;
var change = new Vue({
    el:"#change",
    data:{
        current: "🖐",
        all: ["🖐","😃","🤝","😎","❤️"]
    },
    methods:{
        emoji: function(){
            while(1 == 1){
            $("#change").slideUp(150);
            this.current = this.all[count];
            $("#change").slideDown(150);
            
            count+=1;
            if(count==5)
            {
                count=0;
            }
        }
        }
    },
    created:function(){this.emoji();}
});

/*
var message = new Vue({
    el : '#message',
    data:{
        message: 'Rishabh Chawla'
    },
    methods: {
        
        reverseName: function(){
            this.message = this.message.split("").reverse().join("")
        }
        
    }
});
*/
/*

var feedback = new Vue({
    el:'#feedback',
    data:{
        feedback: ""
    }
});

*/
