<template>
  <div id="display" class="output-text">
    <ul>
      <!--<li v-for="message in filterdMessages"  v-if="setInterval" :key="message.key">-->
      <li v-for="message in filterdMessages" :key="message.key">
      <span class="data-prompt"></span>
        <vue-typer
            :text='message.trinity'
            :repeat='0'
            :shuffle='false'
            initial-action='typing'
            :pre-type-delay='75'
            :type-delay='135'
            :pre-erase-delay='2000'
            :erase-delay='200'
            erase-style='backspace'
            :erase-on-complete='false'
            caret-animation='blink'
        >
        </vue-typer>
      </li>
    </ul>
  </div>
</template>
<script>

  export default {
    name: "MatrixMonitor",

    data() {
      return {
        show: 0,
        filterdMessages: [],
      }
    },
    props: ['messages'],
    components: {
    },

    mounted() {

      for (let i = this.show; i < this.messages.length; i++) {
        this.doSetTimeout(i);

      }
    },

    methods: {
      doSetTimeout: function (ind) {

        var vm = this;
        let messages = vm.filterdMessages;

        setTimeout(function () {
          messages.push(vm.messages[ind]);
          if (ind === vm.messages.length) {
            return
          }


        }, 3000 + (4000 * ind));
      },

    },
    computed: {},

  }
</script>
<style>
  li{
    list-style: none
  }
  .output-text {
   background-color: #22261C;

    height: 36%;
    width: 42%;

    position: absolute;
    margin: auto;
    top: 0;
    left: 3%;
    bottom: 57%;
    right: 0;

  }
  .vue-typer .custom.char {
    color: #3A8333;
  }
  .vue-typer .custom.caret.typing {
    background-color: #3A8333;
    width: 5px
  }
  .vue-typer .custom.caret.complete {
    background-color: #3A8333;
    width: 5px;
  }
</style>