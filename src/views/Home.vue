<template>
  <div class="home">
    <div class="dashboard">
      <p>
        Welcome user ! Here's the latest data we have for you. <br><br>
        {{ pets.length }} <span v-if="pets.length == 1">pet</span><span v-else>pets</span> in total composed of :
        <ul>
          <li>{{ dogs.length }} <span v-if="dogs.length <= 1">dog</span><span v-else>dogs</span></li>
          <li>{{ cats.length }} <span v-if="cats.length <= 1">cat</span><span v-else>cats</span></li>
        </ul>
      </p>
      <div class="addPet">
        <button @click="displayForm"><span v-if="!showForm">Add a new pet</span><span v-else>Hide the form</span></button>
      </div>
      <Form v-if="showForm"/>
    </div>
  </div>
</template>

<script>
import Form from "../components/Form.vue";
import { mapGetters } from "vuex"

export default {
  name: 'Home',
  data(){
    return{
      showForm : false,
    }
  },

  components: {
    Form,
  },

  methods : {
    displayForm(){
      this.showForm = !this.showForm
    }
  },

  computed : {

    ...mapGetters({
      pets : "pets",
      dogs : 'countDogs',
      cats : 'countCats',
    })
  }
}
</script>

<style scoped>
.dashboard{
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

button{
  width: 100%;
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
</style>
