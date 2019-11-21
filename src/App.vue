<template>
  <div id="app">
    <div class="container-outer">
      <div class="computer-container">
        <matrix-computer></matrix-computer>
      </div>
      <div class="message-container">

        <matrix-monitor :messages="messages" ></matrix-monitor>

      </div>

    </div>

  </div>
</template>

<script>
  import MatrixComputer from './components/MatrixComputer.vue'
  import MatrixMonitor from './components/MatrixMonitor.vue'
export default {

  name: 'app',
  components:{
    'matrix-computer' : MatrixComputer,
    'matrix-monitor': MatrixMonitor,
  },
  data () {
    return {
      vintagePC: '',

      messages: [
        {
          key: 'name1',
          trinity: 'Wake up, Neo...',
          status: 'true',
        },
        {
          key: 'name2',
          trinity: 'The Matrix has you',
          status: 'true',
        },
        {
          key: 'name3',
          trinity: 'Follow the white rabbit',
          status: 'true',
        },

        {
          key: 'name4',
          trinity: '',
          status: 'true',
        },
        {
          key: 'name5',
          trinity: '',
          status: 'true',
        },
        {
          key: 'name6',
          trinity: 'Knock, Knock, Neo.',
          status: 'true',
        },

      ],

    }
    // vintagePC: 'https://media.giphy.com/media/DaKt4BITQ7q8/giphy.gif',


  }

}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap');

  #app {
    border-radius: 4px;
    height: 100vh;
    width: 100vw;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
  }

  .container-outer {
    position: relative;
    border: 2px solid red;
    height: 100%;
    width:75%;


  }

  .computer {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 50%;
    right: 0;

  }


  img {
    position: absolute;
    margin: auto;
    height: 100%;
    width:100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

</style>
