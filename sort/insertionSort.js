Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i += 1) {
    // 开始做比较的值
    const temp = this[i];
    let j = i;
    while (j > 0) {
        // 前一个和后一个作比较
      if (this[j - 1] > temp) {
        this[j] = this[j - 1];
      } else {
        break;
      }
      j -= 1;
    }
    this[j] = temp;
  }
};

const arr = [2, 4, 5, 3, 1];
arr.insertionSort();
