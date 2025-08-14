// https://leetcode.com/problems/design-browser-history/description/
/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.history = [homepage];
    this.currentIndex = 0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.currentIndex++;
    this.history = this.history.slice(0, this.currentIndex);
    this.history.push(url);
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    this.currentIndex = Math.max(0, this.currentIndex - steps);
    return this.history[this.currentIndex];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    this.currentIndex = Math.min(this.history.length - 1, this.currentIndex + steps);
    return this.history[this.currentIndex];
};
