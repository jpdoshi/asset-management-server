export const capitalize = (s) => {
  return String(s[0]).toUpperCase() + String(s).slice(1);
};

export const removeFirstStringElement = (arr, target) => {
  const index = arr.findIndex((item) => item === target);
  if (index !== -1) {
    arr.splice(index, 1); // Removes the element at the found index
  }
  return arr;
};
