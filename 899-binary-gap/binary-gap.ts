function binaryGap(n: number): number {
  const binaryNum = (n >>> 0).toString(2);

  let zeroCount = 0;
  let maxLen = 0;

  for (const bit of binaryNum) {
    if (bit === "0") zeroCount++;
    else if (bit === "1") {
      if (zeroCount > maxLen) maxLen = zeroCount;
        zeroCount = 1;
    }
  }

  return maxLen;
}