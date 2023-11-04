import array from "./datas/datas.js";

const map = (): void => {
  let initialID = 0;

  // const newArray = array.map((item) => ({
  //   ...item,
  //   id: ++initialID,
  // }));

  const newArray = array.map((item) => {
    const newObject = {
      ...item,
      id: ++initialID,
    };
    return newObject;
  });

  console.log("Map:", newArray);
};

export default map;
