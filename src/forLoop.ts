import array from "./datas/datas.js";

const forLoop = () => {
  let initialID = 0;

  for (const item of array) {
    item.id = ++initialID;
  }
  console.log(array);
};

export default forLoop;
