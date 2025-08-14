class BrowserHistory {
  constructor(homepage) {
    this.history = [homepage];
    this.currentIndex = 0;
  }
  visit(url) {
    this.currentIndex++;
    this.history = this.history.slice(0, this.currentIndex);
    this.history.push(url);
  }
  back(steps) {
    this.currentIndex = Math.max(0, this.currentIndex - steps);
    return this.history[this.currentIndex];
  }
  forward(steps) {
    this.currentIndex = Math.min(
      this.history.length - 1,
      this.currentIndex + steps
    );
    return this.history[this.currentIndex];
  }
}

const browserHistory = new BrowserHistory("leetcode.com");
browserHistory.visit("google.com");
browserHistory.visit("facebook.com");
browserHistory.visit("youtube.com");
console.log(browserHistory.back(1));
console.log(browserHistory.back(1));
console.log(browserHistory.forward(3));