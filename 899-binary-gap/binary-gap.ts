function binaryGap(n: number): number {
  let distances = [];

  const binaryNum = (n >>> 0).toString(2);

   // o(n)
  for (let i = 0; i < binaryNum.length; i++) {
    if (binaryNum[i] === "1") {
      distances.push(i);
    }
  }

  if (distances.length <= 0) return 0;

  let prev = 0;
  let high = 0;
  // o(n)
  distances.forEach((x) => {
    if (x - prev > high) {
      high = x - prev;
    }
    prev = x;
  });

  return high;
}