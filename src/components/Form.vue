<template>
  <br><hr>
  <form @submit.prevent="handleSubmit">
    <label>Name :</label>
    <input type="name" required v-model="pet.name">
    <div class="error" v-if="errors.name">{{ errors.name }}</div>

    <label>Specie :</label>
    <select v-model="pet.species" required>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
    </select>
    <div class="error" v-if="errors.specie">{{ errors.specie }}</div>

    <label>Birth year :</label>
    <input type="number" min="0" required v-model="pet.birthYear">
    <div class="error" v-if="errors.birth">{{ errors.birth }}</div>

    <label>Photo :</label>
    <input type="text" placeholder="Copy and past an url" v-model="pet.photo">

    <label>Favorite food :</label>
    <input type="text" v-model="tempsFood" @keyup.alt="addFood" placeholder="press alt + , to add a new entry">
    <div class="pill" v-for="food in pet.favFoods" :key="food">
      <span @click="deleteSkill(food)">{{ food }}</span>
    </div>

    <div class="submit">
      <button>Submit</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex"
export default {
  data() {
    return {
      errors : {
        birth : '',
        name : '',
        specie : ''
      },
      pet : {
        birthYear: 0,
        favFoods : [],
        name: '',
        photo : '',
        species: '',
      },
      tempsFood : '',
    }
  },

  methods : {
    ...mapActions({
      addPet : "addPet"
    }),

    handleSubmit() {
      this.errors.birth = this.pet.birthYear > 0 ? '' : 'Birth year must be greater than 0'
      this.errors.name = this.pet.name.length >= 1 ? '' : 'Name must be at least 1 char long'
      
      if (this.pet.species != 'dog' && this.pet.species != 'cat') {
        return this.errors.specie = 'Specie must be dog or cat'
      }

      this.errors.specie = ''
      
      if(!Object.values(this.errors).every(o => o === null)){
        this.addPet(this.pet)
        this.pet = {}
      }
    },

    addFood(e) {
      if(e.key === ',' && this.tempsFood){
        if(!this.pet.favFoods.includes(this.tempsFood)){
          this.pet.favFoods.push(this.tempsFood)
        }
        this.tempsFood = ''
      }
    },

    deleteFood(food) {
      this.pet.favFoods = this.pet.favFoods.filter((item)=>{
        return food !== item
      })
    },
  }
}
</script>

<style scoped>

form{
  max-width: 420px;
  margin: 0 auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label{
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input, select{
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

.pill{
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
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

.submit{
  text-align: center;
}

.error{
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>