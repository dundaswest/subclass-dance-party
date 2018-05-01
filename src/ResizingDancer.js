var makeResizingDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node = $('<span class="resize"></span>');
  this.setPosition();
};

makeResizingDancer.prototype = Object.create(Dancer.prototype); // <===
makeResizingDancer.prototype.constructor = makeResizingDancer;

makeResizingDancer.prototype.step = function() {
  this.oldStep = Dancer.prototype.step.call(this);
  this.$node.toggle();
};
