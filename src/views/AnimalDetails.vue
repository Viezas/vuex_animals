<template>
  <div class="animal">
    <button @click="back">Go Back</button>
    <div v-if="pet">
      <h3>{{ pet.name }}</h3>
      <p>
        Informations : <br><br>
        <img :src="pet.photo" :alt="pet.species + ' photo'" v-if='pet.photo'><br><br>
        Name : {{ pet.name }}<br>
        Specie : {{ pet.species }}<br>
        Birth Year : {{ pet.birthYear }}<br>
        Favorite Food :
        <span v-if="pet.favFoods.length > 0">
          <ul v-for="food in pet.favFoods" :key="food">
            <li v-html="food"></li>
          </ul>
        </span>
        <span v-else>No favorite food. How sad ಥ_ಥ</span> 
        <br>
      </p>
    </div>
    <div v-else>
      <h3 class="error">Error ! This animal isn't registred yet ! Please do so and come back again !</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimalDetails',

  props: ['id'],

  computed : {
    pet(){
      return  this.$store.getters.pet(this.id)
    }
  },

  methods : {
    back() {
      this.$router.go(-1)
    },
  }
}
</script>

<style scoped>
.animal{
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

.error{
  color: #ff0062;
  margin-top: 10px;
}

button{
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}

button:focus{
  outline:0;
}

img{
  max-width: 420px;
  height: auto;
}
</style>