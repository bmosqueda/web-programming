var obj = {
  name: 'Brandon Mosqueda',
  greet: function() {
    console.log(`Hello ${ this.name }`);
  }       
};

obj.greet();
/*
  Invocando a las funciones con call podemos pasarle
  el objeto this para que haga referencia a otro objeto
 */
obj.greet.call({ name: 'Alejandro González' });