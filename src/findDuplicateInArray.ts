const arr = [5, 5, 4, 3, 2];

// Time Complexity: O(n^2)
export const findDuplicateInArray1 = () => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        console.log("Duplicate Exist !!!");
        return;
      }
    }
  }
  console.log("Duplicate does not exist :)");
};

// Time Complexity: O(n)
export const findDuplicateInArray2 = () => {
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      console.warn("Duplicate Exist !!!");
      return;
    }
    seen.add(arr[i]);
  }
  console.info("Duplicate does not exist :)");
};

// Time Complexity: O(n^2) due to Array.indexOf() and Array.lastIndexOf()
export const findDuplicateInArray3 = () => {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      console.warn("Duplicate Exist !!!");
      return;
    }
  }
  console.info("Duplicate does not exist :)");
};

// Time Complexity: O(n^2) due to Arrray.includes()
export const findDuplicateInArray4 = () => {
  const checkedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (checkedArray.includes(arr[i])) {
      console.warn("Duplicate Exist !!!");
      return;
    }
    checkedArray.push(arr[i]);
  }
  console.info("Duplicate does not exist :)");
};
