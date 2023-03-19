import swapiGetter from "./swapiGetter.js";

swapiGetter(1)
  .then(name => console.log(name))
  .catch(err => console.error(err));
