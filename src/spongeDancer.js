var SpongeDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.setPosition(top, left);
};

SpongeDancer.prototype = Object.create(MakeDancer.prototype);
SpongeDancer.prototype.constructor = SpongeDancer;

SpongeDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle(1000);
};
