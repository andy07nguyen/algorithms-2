// ============================================================
// Given array, remove and return the value as the beginning of the array. Do this without using any built-in array methods except pop()
// ============================================================

Array.prototype.popFront = function () {
    if (this.length === 0) {return this}
    if (this.length === 1) {return this.pop()}
    for (var i = 0; i < this.length - 1; i++) {
        var temp = this[i]
        this[i] = this[i+1]
        this[i+1] = temp
    }
    this.pop()
    return this
};
