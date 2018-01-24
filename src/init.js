$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($('body').height() * Math.random()) + 50,
      ($('body').width() * Math.random()) - 200,
      Math.random() * 1000
    );
  
    $('body').append(dancer.$node);
    $('span.schoolFishDancer').on('mouseover', function() {
      $(this).animate({left: '+=100'}, 1000);
      $(this).animate({top: '+=100'}, 1000);
      $(this).animate({left: '-=100'}, 1000);
      $(this).animate({top: '-=100'}, 1000);
      $(this).animate({left: '+=100'}, 1000);
      $(this).animate({top: '+=100'}, 1000);
      $(this).animate({left: '-=100'}, 1000);
      $(this).animate({top: '-=100'}, 1000);
    });

    $('span.dancer').on('click', function() {
      $(this).css('background-image', 'url(assets/shark.gif)');
      var top1 = Number($(this).css('top').slice(0, -2));
      var left1 = Number($(this).css('left').slice(0, -2));
      var closest = findClosest(top1, left1, window.dancers, pythag);
      console.log($(closest.$node[0]));
      $(closest.$node[0]).css('background-image', 'url(assets/shark.gif)');
 
    });
    

    window.dancers.push(dancer);
  });

  document.getElementById('lineUpLeft').onclick = function() {
    for (var i = 0; i < window.dancers.length; i++) {
      MakeDancer.prototype.setPosition.call(window.dancers[i], top, 0);
    }
  };

  // $('#lineUpLeft').mouseover(function(event) {
  //   $('span.newDancer').stop();
  // });

  document.getElementById('lineUpRight').onclick = function() {
    for (var i = 0; i < window.dancers.length; i++) {
      MakeDancer.prototype.lineUp.call(window.dancers[i], top, 1500);
    }
  };

  var findClosest = function(top1, left1, array, pythag) {
    var shortestD, closestElem;
    for (var i = 0; i < array.length; i++) {
      if (!shortestD) {
        shortestD = pythag(top1, left1, array[i]);
        closestElem = array[i];
      } else if (pythag(top1, left1, array[i]) > 1 && pythag(top1, left1, array[i]) < shortestD) {         
        shortestD = pythag(top1, left1, array[i]);
        closestElem = array[i];
      }
    }
    return closestElem;
  };

  var pythag = function(top1, left1, dancer2) {
    position1 = top1 - (dancer2.top);
    position2 = left1 - (dancer2.left);
    var distanceBetween = Math.sqrt(Math.pow(position1, 2) + Math.pow(position2, 2));
    return distanceBetween;
  };

  var flag = false;
  document.getElementById('crabDancer').onclick = function() {
    if (!flag) {
      $('body').append('<div class="crabDancer"></div>');
      flag = true;
    }
  };
 
  $(document).keydown(function(e) {
    switch (e.which) {
    case 37:
      $('.crabDancer').stop().animate({
        left: '-=200'
      }); //left arrow key
      break;
    case 38:
      $('.crabDancer').stop().animate({
        top: '-=200'
      }); //up arrow key
      break;
    case 39:
      $('.crabDancer').stop().animate({
        left: '+=200'
      }); //right arrow key
      break;
    case 40:
      $('.crabDancer').stop().animate({
        top: '+=200'
      }); //bottom arrow key
      break;
    }
  });
 
});

