const randomNumGenerator = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 0.9)) + min;
  return result;
};

export default { randomNumGenerator };
