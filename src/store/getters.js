export const pet = (state) => (id) => {
  return state.pets[id];
}

export const pets = (state) => {
  return state.pets;
}

export const countDogs = (state) => {
  let dogs = []
  for (const key in state.pets) {
    if (state.pets[key].species.toLowerCase() == 'dog') {
      dogs.push(state.pets[key]);
    }
  }
  return dogs
}

export const countCats = (state) => {
  let cats = []
  for (const key in state.pets) {
    if (state.pets[key].species.toLowerCase() == 'cat') {
      cats.push(state.pets[key]);
    }
  }
  return cats
}