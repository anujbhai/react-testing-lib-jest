import axios from "axios";

const swapiGetter = id => 
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.data.name)
    .catch(err => console.error(err));

export default swapiGetter;

