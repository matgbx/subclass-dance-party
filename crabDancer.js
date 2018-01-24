var CrabDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

CrabDancer.prototype = Object.create(MakeDancer.prototype);
CrabDancer.prototype.constructor = CrabDancer;

CrabDancer.prototype.step = function() {
  
};

