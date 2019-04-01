// Exercise - This Keyword

// b.say() prints out "{name: 'jay', say: [FUNCTION]}"
var b = {
  name: 'jay',
  say() {console.log(this)}
};

// c.say() prints out [FUNCTION], 'cause thats what it's returned
// but when executed prints out "window"
var c = {
  name: 'jay',
  say() {return function(){console.log(this)}}
};

// d.say() prints out [FUNCTION]
// but when executed prints out "d" {name: 'jax, say: [FUNCTION]}
// that's cause the arrow function lexically binds THIS to "d" object
var d = {
  name: 'jay',
  say() {return () => console.log(this)}
}