Array.prototype.selectionSort = function () {
    for (let i = 0; i < this.length - 1; i += 1) {
        // 最小值的下标
        let indexMin = i;
        for (let j = i; j < this.length; j += 1) {
            // 当前元素小于最小值
            if (this[j] < this[indexMin]) {
                // 找到最小值的下标
                indexMin = j;
            }
        }
        // 判断是自己的话就不用交换了
        if (indexMin !== i) {
            const temp = this[i];
            this[i] = this[indexMin];
            this[indexMin] = temp;
        }
    }
};

const arr = [5, 4, 3, 2, 1];
arr.selectionSort();
