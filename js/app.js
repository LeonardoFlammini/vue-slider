const {createApp} = Vue;

createApp({
  data(){
    return{
      photos: [
        "img/01.webp",
        "img/02.webp",
        "img/03.webp",
        "img/04.webp",
        "img/05.webp",
      ],
      counter: 0,
      autoPlayEl: null

    }
  },
    methods: {
      nextPrev(isNext) {
        if(isNext){
          this.counter++;
        }else if(!isNext){
          this.counter--;
        }
        if(this.counter > (this.photos.length - 1)){
          this.counter = 0;
        }else if ( this.counter < 0 ){
          this.counter = (this.photos.length - 1);
        }
        
      },
      autoPlay(){
        this.autoPlayEl = setInterval( ()=> {
          this.counter++;
          if(this.counter > (this.photos.length - 1)){
            this.counter = 0;
          }
        },3000)
      }
    },
    mounted(){
      this.autoPlay();
    }
    
  
  
}).mount('#app');