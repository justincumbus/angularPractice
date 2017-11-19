var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X' + this.x + ', Y: ' + this.y);
    };
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value > 5000) {
                throw new Error("X is too high");
            }
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var drawPoint = function (point) {
    //...
};
var point = new Point(5, 4);
point.X = 5001;
console.log(point.X);
point.draw();
