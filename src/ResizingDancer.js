var makeResizingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<button class="resize"></button>');
};

makeResizingDancer.prototype = Object.create(Dancer.prototype); // <===
makeResizingDancer.prototype.constructor = makeResizingDancer;

makeResizingDancer.prototype.step = function() {

  this.oldStep = Dancer.prototype.step.call(this);
  //this.toggle();
};

makeResizingDancer.prototype.setPosition = function() {
  this.setPosition();
};