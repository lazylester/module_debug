import Ractive from 'ractive'

var item = Ractive.extend({
  template : "Have some foo: {{ foo }}"
})

export default item
