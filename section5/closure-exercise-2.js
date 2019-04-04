// How can we fix this function so that the view
// gets created only once?
let view;
function initializeView() {
  view = 'Im a cool image now!!';
  console.log('view created!');
}

initializeView();
initializeView();
initializeView();

console.log(view);

// With this aprouch we can just initialize it once
// as long as counter equals 0
function initializeView2() {
  let counter = 0;
  return function() {
    if(counter > 0) {
      console.log('Im not initializing again...');
    } else {
      counter++;
      view = 'Im a cool image now!!';
      console.log('view created set!');
    }
  }
}

const init2 = initializeView2();

init2();
init2();
init2();

console.log(view);