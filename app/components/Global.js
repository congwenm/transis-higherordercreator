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
