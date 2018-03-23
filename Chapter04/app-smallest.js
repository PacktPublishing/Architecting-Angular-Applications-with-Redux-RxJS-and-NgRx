function smallest(arr, len, val) {
  if(len > 0) {
    return smallest(arr, len -1, arr[len] < val ? arr[len]: val);
  } else {
    return arr[len] < val ? arr[len]: val;
  }
}

function smallestImp(arr) {
  let val = arr[0];
  for(var i =0; i < arr.length; i++) {
    val = arr[i] < val ? arr[i] : val;
  }

  return val;
}

var arr = [11,2,4,7];

console.log('rec res', smallest(arr, arr.length-1, arr[arr.length -1]));

console.log('res', smallestImp(arr));
