// selection sort codding
function selectionSort(arr) {
  let last = arr.length - 1;

  for (let i = 0; i < last; i++) {
    let nextMin = findNextMin(arr, i, last);
    let min = arr[i];
    arr[i] = arr[nextMin];
    arr[nextMin] = min;
    console.log(arr[i]);
  }
  return arr;
}

function findNextMin(arr, bottom, top) {
  let min = arr[bottom];
  let minIndex = bottom;

  for (let i = bottom + 1; i < top; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }
  return minIndex;
}

let arr = [1, 5, 3, 4, 8, 6, 9, 7, 12, 0];

console.log(selectionSort(arr));

// insertion sort codding
let array = [1,3,5,8,9,10,4];

function insertionSort(arr) {
    for(let i= 0;i<arr.length;i++){
            for(let j=i+1; j>=0;j--){
               if(arr[j-1] > arr[j]){
                   let temp = arr[j];
                   arr[j] = arr[j-1];
                   arr[j-1]= temp
               }
        }
    }
}

insertionSort(array);

console.log(array);


//min heap sort codding
class minHeap {
  constructor() {
    this.array = [];
  }
  insertValue(value) {
    this.array.push(value);
    let valueInx = this.array.length - 1;

    while (valueInx > 0) {
      let child = this.array[valueInx];
      let parentIndex = Math.floor((valueInx - 1) / 2);
      let parent = this.array[parentIndex];

      if (child < parent) {
        this.array[parentIndex] = child;
        this.array[valueInx] = parent;

        valueInx = parentIndex;
      } else break;
    }
  }
}

function minValues(array) {
    
}

let myheap = new minHeap();
myheap.insertValue(12);
myheap.insertValue(1);
myheap.insertValue(11);
myheap.insertValue(4);
myheap.insertValue(7);
myheap.insertValue(8);
myheap.insertValue(9);
myheap.insertValue(10);
myheap.insertValue(3);
myheap.insertValue(2);
myheap.insertValue(5);
myheap.insertValue(21);
myheap.insertValue(23);
myheap.insertValue(17);
myheap.insertValue(28);
myheap.insertValue(25);
myheap.insertValue(15);

console.log(myheap.array);


console.log(arr);
