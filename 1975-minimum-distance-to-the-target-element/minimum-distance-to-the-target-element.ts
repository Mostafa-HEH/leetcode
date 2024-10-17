function getMinDistance(nums: number[], target: number, start: number): number {
  let minDistance = Number.MAX_VALUE;

  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === target) {
      const distance = Math.abs(i - start);
       minDistance = Math.min(minDistance, distance);
    }
  }

  return minDistance
}