import Transis from 'transis';

const Car = Transis.Model.extend('Car', function() {
  this.attr('name', 'string');
  this.attr('color', 'string');
  this.attr('price', 'string');
});

window.AppState = new (
  Transis.Model.extend('AppState', function() {
    this.prop('vehicle');
  })
);

window.AppState.vehicle = new Car({name: 'Honda'});
window.AppState.limo = new Car({name: 'Lincoln', price: '200'});



const Vigilante = Transis.Model.extend('Vigilante', function() {
  this.attr('name', 'string');
  this.attr('color', 'string');
  this.attr('powerlevel', 'number');
});


window.AppState.spiderman = Vigilante.load({
  id: 'spiderman',
  name: 'Peter Parker',
  color: 'gray',
  powerlevel: 15
});

window.AppState.deadpool = Vigilante.load({
  id: 'deadpool',
  name: 'Wade Wilson',
  color: 'gray',
  powerlevel: 20
});

window.AppState.punisher = Vigilante.load({
  id: 'punisher',
  name: 'Frank Castle',
  color: 'gray',
  powerlevel: 15
});
