export default (number1, number2 = 1) => {
  const [min, max] = [
    Math.ceil(Math.min(number1, number2)), Math.floor(Math.max(number1, number2)),
  ];
  return Math.floor(Math.random() * (max - min)) + min;
};
