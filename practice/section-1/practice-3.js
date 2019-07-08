'use strict';

function collectSameElements(collectionA, objectB) {
  var arr = new Array();
  // console.log(collectionB[0]);
  var collectionB = objectB.value;
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
