class SegmentTree {
    private tree: number[];
    private size: number;

    constructor(size: number) {
        this.size = size;
        this.tree = new Array(size * 2).fill(0);
    }

    update(index: number, value: number): void {
        index += this.size;
        this.tree[index] = value;
        for (; index > 1; index >>= 1) {
            this.tree[index >> 1] = Math.max(this.tree[index], this.tree[index ^ 1]);
        }
    }

    query(left: number, right: number): number {
        let res = 0;
        left += this.size;
        right += this.size;
        while (left <= right) {
            if (left % 2 === 1) res = Math.max(res, this.tree[left++]);
            if (right % 2 === 0) res = Math.max(res, this.tree[right--]);
            left >>= 1;
            right >>= 1;
        }
        return res;
    }
}

function lengthOfLIS(nums: number[], k: number): number {
    const maxNum = Math.max(...nums);
    const segTree = new SegmentTree(maxNum + 1);
    let result = 0;

    for (const num of nums) {
        const left = Math.max(1, num - k);
        const right = num - 1;
        const maxLen = segTree.query(left, right);
        const currentLen = maxLen + 1;
        segTree.update(num, currentLen);
        result = Math.max(result, currentLen);
    }

    return result;
}