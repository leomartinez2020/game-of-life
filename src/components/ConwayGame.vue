<template>
  <div class="compo">
    <h1>{{ titulo }}</h1>
    <p v-if="notStarted">Waiting for Animation</p>
    <p v-else-if="noAnimation">Animation stopped</p>
    <p v-else>Animation started</p>
    <div class="buttons">
      <button v-on:click="startAnimation">Start Animation</button>
      <button v-on:click="stopAnimation">Stop Animation</button>
      <button v-on:click="resetAnimation">Reset Animation</button>
    </div>
    <div class="container">
      <div class="cuadro"
        v-bind:class="[elem === 1 ? 'negro': 'blanco']"
        v-for="(elem, indx) in lista" v-bind:key="indx">

      </div>
    </div>
  </div>
</template>

<script>
import { transform, createList } from './utils/transform';

export default {
  name: 'ConwayGame',
  data: function () {
    return {
      titulo: 'Conway\'s Game of Life',
      lista: createList(20),
      animar: null,
      visible: true
    }
  },
  computed: {
    noAnimation: function() {
      return this.animar === 0;
    },
    notStarted: function() {
      return this.animar === null;
    }
  },
  methods: {
    resetAnimation: function() {
      clearInterval(this.animar);
      this.animar = null;
      this.lista = createList(20);
    },
    startAnimation: function() {
      if (this.animar === null || this.animar === 0) {
        this.animar = setInterval(this.evolve, 200);
      }
    },
    stopAnimation: function() {
      clearInterval(this.animar);
      this.animar = 0;
    },
    evolve: function() {
      let copia = this.lista.slice();
      let suma = 0;
      for (let k = 0; k < copia.length; k++) {
        let current = this.lista[k];
        let neighbors = transform(k, 20);
        for (let j = 0; j < neighbors.length; j++) {
          suma = suma + this.lista[neighbors[j]];
        }
        if (current == 1 && suma > 3) {
          copia[k] = 0;
        }
        if (current == 1 && suma < 2) {
          copia[k] = 0;
        }
        if (current == 0 && suma === 3) {
          copia[k] = 1;
        }
        
        suma = 0;
      }
      this.lista = copia;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.compo {
  margin: auto;
  width: 40%;
}
.compo h1 {
  text-align: center;
}
.header h1 {
  text-align: center;
}
.container {
  display: grid;
  grid-template: repeat(30, 20px) / repeat(20, 1fr);
}
.negro {
  background: rgb(10, 15, 20);
}
.blanco {
  background: white;
}
.cuadro {
  color: whitesmoke;
  border: 1px solid #c0c0c0;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
}
.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 50px;
}
</style>
