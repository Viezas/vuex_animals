<template>
  <div class="cats">
    <h3><span v-if="cats.length <= 1">Cat</span><span else>Cats</span> ({{ cats.length }})</h3>
    <p>
      Here we go ! <br>
      You can now acces to the complet list of cats already registered !<br>
    </p>
    <router-link :to="{ name: 'CatDetails', params: { id: pets.indexOf(cat) } }" v-for="cat in cats" :key="cat">
      <div class="card" :style="{ backgroundImage: `url(${cat.photo})` }">
        <ul>
          <li>Name : {{ cat.name }}</li>
          <li>Birth year : {{ cat.birthYear }}</li>
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
      cats : 'countCats',
      pets : 'pets'
    })
  },
}
</script>

<style scoped>
.cats{
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