
<template>
  <div class="computer">
    <img class="white-rabbit" v-if="!isHidden" v-bind:src="whiteRabbit" />
    <img  class="matrix-rabbit"  v-if="!isHidden" v-bind:src="matrixRabbit" />
    <img v-bind:src="vintagePC" />
  </div>


</template>
<script>
  export default {
    name: "MatrixComputer",
    data (){
      return {
        vintagePC: 'http://giphygifs.s3.amazonaws.com/media/a6GhnspYLkSBy/giphy.gif',
        whiteRabbit: 'http://bootstrap.creativesakas.com/media/rabbit.png',
        matrixRabbit: 'https://media.giphy.com/media/WoD6JZnwap6s8/giphy.gif',
        isHidden: true,
        completeTag: 'none',
      }
    },
    mounted() {
      this.$nextTick(function(){
        window.setInterval(() =>{
          this.lookForStyle();
        }, 10000)
      });

      this.$nextTick(function (){
        window.setInterval(() => {
          this.displayContent();
        }, 5000);
      })
    },
    computed: {
      lookForStyle: function(){

        let all = document.getElementsByClassName('complete');
        for (let i = 0; i < all.length; i++) {
          all[5].style.display = 'inline-block';
        }
      }
    },


    methods: {
      displayContent: function(){
        let finishMess = document.getElementById("display").innerText;

        let foo = finishMess.includes("rabbit");
        if (foo === true){
          return [this.isHidden = false]
        }else{
          // alert("No BUeno")
        }
      }
    }
  }
</script>
<style scoped>

  .white-rabbit {
    position: absolute;
    height: 60px;
    width: 50px;
    z-index: 5;
    top: 0;
    left: 0;
    bottom: 40%;
    right: 0;
  }

  .matrix-rabbit {
    position: absolute;
    height: 60px;
    width: 50px;
    z-index: 4;
    top: 0;
    left: 0;
    bottom: 40%;
    right: 0;
  }
</style>