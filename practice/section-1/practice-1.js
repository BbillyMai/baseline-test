'use strict';

function collectSameElements(collectionA, collectionB) {
  var arr = new Array();
  for(var i in collectionA){
    for(var j in collectionB){
        if(collectionA[i]==collectionB[j]){
          arr.push(collectionA[i]);
          //console.log(arr);
        }
    }
  }
  return arr;
}
