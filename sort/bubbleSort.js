Array.prototype.bubbleSort = function () {
    for (let i = 0; i < this.length - 1; i += 1) {
        console.log(this[i], this[i + 1])
        for (let j = 0; j < this.length - 1 - i; j += 1) {
            // 每一轮的区间会逐渐变小 this.length - 1 - i;
            // 第一个元素比相邻的元素大
            if (this[j] > this[j + 1]) {
                const temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
};

const arr = [2, 5, 4, 3, 2, 1, 9];
arr.bubbleSort();
console.log(arr)