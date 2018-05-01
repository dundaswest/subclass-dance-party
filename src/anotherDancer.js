var makeAnotherDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="another"></span>');
  this.setPosition();
};

makeAnotherDancer.prototype = Object.create(Dancer.prototype); // <===
makeAnotherDancer.prototype.constructor = makeAnotherDancer;

makeAnotherDancer.prototype.step = function() {
  this.oldStep = Dancer.prototype.step.call(this);
  this.$node.toggle();
};