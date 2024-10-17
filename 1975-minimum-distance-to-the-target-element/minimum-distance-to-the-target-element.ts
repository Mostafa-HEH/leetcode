function getMinDistance(nums: number[], target: number, start: number): number {
    for (let distance = 0; distance < nums.length; distance++) {
        if (start + distance < nums.length && nums[start + distance] === target) {
            return distance;
        }
        if (start - distance >= 0 && nums[start - distance] === target) {
            return distance;
        }
    }
    return -1;
}