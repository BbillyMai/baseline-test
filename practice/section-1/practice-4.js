'use strict';

function collectSameElements(collectionA, objectB) {
  var arr = new Array();
  //var collectionA1 = JSON.stringify(collectionA);
  var collectionB = objectB.value;
  
   for(var i in collectionA){
     for(var j in collectionB){
         if(collectionA[i].key==collectionB[j]){
           arr.push(collectionA[i].key);
           //console.log(arr);
         }
     }
   }
   return arr;
}
