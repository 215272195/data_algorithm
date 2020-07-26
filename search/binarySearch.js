Array.prototype.binarySearch = function (item) {
    // 二分搜索前提是有序的 无序的要sort

    // 数组的最小下标
    let low = 0;
    // 最大下标
    let high = this.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        // 中间值
        const element = this[mid];
        // 对比目标值
        if (element < item) {
            low = mid + 1;
        } else if (element > item) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
};

const res = [1, 2, 3, 4, 5].binarySearch(0);
