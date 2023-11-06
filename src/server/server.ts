const addNumbers = (arr: number[]) => {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

export { addNumbers }