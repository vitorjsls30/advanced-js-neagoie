const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
  var item = list.pop();

  if(item) {
    // This call throws an Stackoverflow error (Maximum call exceeded)
    // removeItemsFromList();
    setTimeout(removeItemsFromList, 0);
  }
};

removeItemsFromList();