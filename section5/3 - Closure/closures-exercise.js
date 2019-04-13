// After 4s, callMe returns it's value
// and it works even if you declare cosnt callMe
// after the setTimeout function
function callMeMaybe() {
  const callMe = 'Hi! Im here';
  setTimeout(function() {
    console.log(callMe);
  },4000);
}

callMeMaybe();