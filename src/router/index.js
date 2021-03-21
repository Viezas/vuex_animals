import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cats from '../views/Cats.vue'
import Dogs from '../views/Dogs.vue'
import AnimalDetails from '../views/AnimalDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cat',
    name: 'Cat',
    component: Cats,
    props: true
  },
  {
    path: '/dog',
    name: 'Dog',
    component: Dogs,
    props: true
  },
  {
    path: '/pets/cat/:id',
    name: 'CatDetails',
    component: AnimalDetails,
    props: true
  },
  {
    path: '/pets/dog/:id',
    name: 'DogDetails',
    component: AnimalDetails,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
