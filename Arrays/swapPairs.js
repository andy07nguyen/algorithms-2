// ============================================================
// Swap position of successive pairs of values of given array. if length is odd, do not change the final element.
// ============================================================

Array.prototype.swapPairs = function () {
    if (this.length === 0 || this.length === 1) {return}
    if (this.length % 2 === 0) {
        for (var i = 0; i < this.length; i+=2) {
            var temp = this[i]
            this[i] = this[i+1]
            this[i+1] = temp
        }
    } else {
        for (var i = 0; i < this.length - 1; i+=2) {
            var temp = this[i]
            this[i] = this[i+1]
            this[i+1] = temp
        }
    }
};
