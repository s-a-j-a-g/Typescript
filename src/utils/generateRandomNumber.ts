const generateRandomNumber = (range: number): number => {
  const randomIndex = Math.floor(Math.random() * range);
  return randomIndex;
};

export default generateRandomNumber;
