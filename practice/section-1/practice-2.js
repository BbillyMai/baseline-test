'use strict';

function collectSameElements(collectionA, collectionB) {
  var arr = new Array();
 // console.log(collectionB[0]);
 var collectionB1 = collectionB[0]
  for(var i in collectionA){
    for(var j in collectionB1){
        if(collectionA[i]==collectionB1[j]){
          arr.push(collectionA[i]);
          //console.log(arr);
        }
    }
  }
  return arr;
}
