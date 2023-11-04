import array from "./datas/datas.js";

const forEach = () => {
  let initialID = 0;

  // const newArray = array.forEach((item) => ({
  //   ...item,
  //   id: ++initialID,
  // }));

  const newArray = array.forEach((item) => {
    item.id = ++initialID;
    item.title = "Lorem Ipsum";
  });

  console.log("For Each", array, newArray);
};

export default forEach;
