const testList1 = ['a', 'b', 'c'];
const testList2 = [1,2,3];

function zipList(list1,list2){
  const outputList = [];
  for(let a = 0; a < list1.length; a++){
    outputList.push(list1[a]);
    outputList.push(list2[a]);
  }
  return outputList;
}

console.log(zipList(testList1, testList2));

function zipListTheSimpleWay(list1, list2){
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(testList1, testList2));
