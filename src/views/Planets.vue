<template>
  <div class="planet-wrapper">
    <input type="text" placeholder="Search For Planet" v-model="searchingPlanet">
    <p class="isFetching" v-if="isFetching">Stay strong! We are fetching the Empire...</p>
    <div class="planet-list" v-if="!isFetching">
      <div class="planet"
       v-bind:key="index"
       v-for="(planet,index) in filterPlanets"
       v-bind:style="{fontSize: planet.size}"
      >
        <p>{{planet.name}}</p>
        <p>{{planet.population}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Planets",
  data: function () {
    return {
      planets: [],
      isFetching: false,
      searchingPlanet: ''
    }
  },
  async mounted() {
    this.isFetching = true;
    const responseFirst = await axios.get('/planets');
    const responseSecond = await axios.get(`${responseFirst.data.next}`);
    const responseThird = await axios.get(`${responseSecond.data.next}`);
    this.planets.push(...responseFirst.data.results,
    ...responseSecond.data.results,
    ...responseThird.data.results);
    this.isFetching = false;

    this.planets.map(planet => {
      if (planet.population > 1000) {
        return planet.size = '1.6rem';
      }

      if (planet.population > 10000) {
        return planet.size = '2.5rem';
      }
      
      if (planet.population > 100000) {
        return planet.size = '3rem';
      }
      else {
        return planet.size = '1rem';
      }
    })
  },

  computed: {
    filterPlanets: function() {
      return this.planets.filter((planet) => {
        return planet.name.match(this.searchingPlanet )
      })
    },
  }
}
</script>

<style scoped>
.planet-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
}

.isFetching {
  margin: 30px 0;
  
}
.planet {
  width: 300px;
  height: 350px;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
  padding: 30px;
  border-radius: 50%;
  box-shadow: 0 10px 10px #ddd;
}

</style>
