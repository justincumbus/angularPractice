"use strict";
exports.__esModule = true;
var likeComponent = (function () {
    function likeComponent(_numberOfLikes, Isliked) {
        this._numberOfLikes = _numberOfLikes;
        this.Isliked = Isliked;
    }
    likeComponent.prototype.numberOfLikes = function () {
        return this._numberOfLikes;
    };
    likeComponent.prototype.clickLike = function () {
        this._numberOfLikes += (this.Isliked) ? -1 : 1;
        this.Isliked = !this.Isliked;
    };
    likeComponent.prototype.displayLikes = function () {
        console.log("There are currently " + this._numberOfLikes + ". It appears you like this");
    };
    return likeComponent;
}());
exports.likeComponent = likeComponent;
