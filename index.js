import Ractive from 'ractive'
Ractive.defaults.data = { foo : "qux" }
import Item from './item'

const options = {
  el : '#container',
  template : "<item />",
  components : { item : Item }
};

window.items = new Ractive(options);

