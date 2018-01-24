var SchoolFishDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="schoolFishDancer"></span>');
  this.setPosition(top, left);
};

SchoolFishDancer.prototype = Object.create(MakeDancer.prototype);
SchoolFishDancer.prototype.constructor = SchoolFishDancer;

SchoolFishDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);


};