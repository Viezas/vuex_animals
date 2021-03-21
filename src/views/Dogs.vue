<template>
  <div class="dogs">
    <h3><span v-if="dogs.length <= 1">Dog</span><span v-else>Dogs</span> ({{ dogs.length }})</h3>
    <p>
      Here we go ! <br>
      You can now acces to the complet list of dogs already registered !<br>
    </p>
    <router-link :to="{ name: 'DogDetails', params: { id: pets.indexOf(dog) } }" v-for="dog in dogs" :key="dog">
      <div class="card" :style="{ backgroundImage: `url(${dog.photo})` }">
        <ul>
          <li>Name : {{ dog.name }}</li>
          <li>Birth year : {{ dog.birthYear }}</li>
        </ul>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: 'Animals',

  computed : {
    ...mapGetters({
      dogs : 'countDogs',
      pets : 'pets'
    })
  },
}
</script>

<style scoped>
.dogs{
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

.card{
  width: 100%;
  border: 2px solid #0b6dff;
  background-position: left;
  background-size: contain;
  margin-top: 30px;
  text-align: left;
  border-radius: 50px;
  background-repeat: no-repeat;
  height: 85px;
}

ul{
  list-style:none;
  margin-left:0;
  padding-left:0;
}

li {
  margin-left: 50%;
}

li:nth-child(odd){
  margin-bottom: 15px;
}

a:visited, a {
  color: #2c3e50 ;
  text-decoration: none;
}
</style>