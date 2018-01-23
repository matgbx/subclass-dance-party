var NewDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer1"></span>');
  this.setPosition(top, left);
};

NewDancer.prototype = Object.create(MakeDancer.prototype);
NewDancer.prototype.constructor = NewDancer;

NewDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.fadeToggle(1000);

};