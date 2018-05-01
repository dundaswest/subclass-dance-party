// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  
  // var dancer = {}; 
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.time = timeBetweenSteps;
  Dancer.prototype.step.call(this);
  Dancer.prototype.setPosition.call(this);
};

Dancer.prototype.step = function() {
  var delay = this.time;
  setTimeout(this.step.bind(this), delay);
};


Dancer.prototype.setPosition = function() {
  var styleSettings = {};
  styleSettings.top = this.top;
  styleSettings.left = this.left;
  this.$node.css(styleSettings);
};