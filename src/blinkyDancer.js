var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.setPosition();
};

makeBlinkyDancer.prototype = Object.create(Dancer.prototype); // <===
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {

  this.oldStep = Dancer.prototype.step.call(this);
  this.$node.toggle();
};

// makeBlinkyDancer.prototype.setPosition = function() {

//   this.setPosition();
// };