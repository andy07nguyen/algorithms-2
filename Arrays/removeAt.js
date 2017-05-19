// ============================================================
// Given array and an index into array, remove and return the array value at that index. Do this without using any built-in array methods except pop().
// ============================================================

Array.prototype.removeAt = function (index) {
    if (this.length === 0) {return this}
    if (this.length === 1) {return this.pop()}
    for (var i = index; i < this.length - 1; i++) {
        var temp = this[i]
        this[i] = this[i+1]
        this[i+1] = temp
    }
    this.pop()
    return this
};
