function runningSum(nums: number[]): number[] {
    const obj: { [key: string]: number } = {};

    for (let i = 0; i < nums.length; i++) {
        obj[i] = nums[i] + (obj[i - 1] || 0);
    }

    return Object.values(obj);
}