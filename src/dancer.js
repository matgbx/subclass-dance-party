var MakeDancer = function(top, left, timeBetweenSteps) {
  
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.step();
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;

};

MakeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.lineUp = function(top, left) {
  this.setPosition(top, left);
};

MakeDancer.prototype.pythag = function(dancer1, dancer2) {
  position1 = dancer1.top - dancer2.top;
  position2 = dancer1.left - dancer2.left;
  var distanceBetween = Math.sqrt(Math.pow(position1, 2) + Math.pow(position2, 2));
  return distanceBetween;
};