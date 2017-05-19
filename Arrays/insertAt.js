Array.prototype.insertAt = function (index, val) {
    if (val === null) {return this}
    this.push(val)
    for (var i = this.length - 1; i > index; i--) {
        var temp = this[i]
        this[i] = this[i-1]
        this[i-1] = temp
    }
    return this
};
