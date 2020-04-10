$(document).ready(function(){
  $('#time').hide();
  $('#info').hide();
  $('#Clock2').hide();
  // changing to 8am scene, background color changes, h1 and h2 changes, image changes, buttons change
    $(".startButton").click(function(){
      $("#begining").hide();
      $(".startButton").hide();
      $("#beginingInfo").hide();
      $("#time").show();
      $("body").css("background-color","#B4D3CA");
      $("#info").show();
      $('#button1').css("display","inline-block")
      $('#button2').css("display","inline-block")
      $('#Clock2').show()
      $('#Clock1').hide()


  // user picks snooze or get up option
  // background color changes
  // description changes
  // button options change
    $('#button1').click(function(){
    $('#time span').html('MONDAY MORNING 10:00 AM')
    $('#info span').html("You have a paper in your writing class due Tuesday, but you also haven't started applying to any summer internships yet. Are you more anxious about your grades or employment?")
    $('#s2Grades').css("display","inline-block")
    $('#s2Employment').css("display","inline-block")
    $('.AngryClock').hide()
    $("body").css("background-color","#DFE2C3");
  });

    $('#button2').click(function(){
    $('#time span').html('MONDAY MORNING 10:00 AM')
    $('#info span').html("You have a paper in your writing class due Tuesday, but you also haven't started applying to any summer internships yet. Are you more anxious about your grades or employment?")
    $('.AngryClock').hide()
    $('#s2Grades').css("display","inline-block")
    $('#s2Employment').css("display","inline-block")
    $("body").css("background-color","#DFE2C3");
  });

// scene 3
// working on paper option
  $('#s2Grades').click(function(){
    $('#time').html('MONDAY AFTERNOON 12:00 PM')
    $('#info').html("You attempted to work on your paper. It did not go well. Would you like to take a break or keep working?")
    $('#s3Break').css("display","inline-block")
    $('#s3Work').css("display","inline-block")
    $("body").css("background-color","#F5D8A0");
  });

// scene 3
// employment option
  $('#s2Employment').click(function(){
    $('#time span').html('MONDAY AFTERNOON 12:00 PM')
    $('#info span').html("You went on LinkedIn to look for jobs, but got distracted stalking your peers' profiles and feeling inadequate. Would you like to take a break or keep working?")
    $('#s3Break').css("display","inline-block")
    $('#s3Work').css("display","inline-block")
    $("body").css("background-color","#F5D8A0");
  });

// scene 4
// break option result
  $('#s3Break').click(function(){
    $('#time').html('MONDAY AFTERNOON 2:00 PM')
    $('#info').html("Great Choice. You <b>~totally~</b> deserved a break. You went on Netflix and started watching 'Tiger King'. You're feeling hungry. Want to eat?")
    $('#s4Yes').css("display","inline-block")
    $('#s4No').css("display","inline-block")
        $("body").css("background-color","#F1B487");
  });
// scene 4
// work option result
$('#s3Work').click(function(){
  $('#time').html('MONDAY AFTERNOON 2:00 PM')
  $('#info').html("Great Choice. You actually got some work done! It's 2:00 and you're feeling hungry. Want to eat?")
  $('#s4Yes').css("display","inline-block")
  $('#s4No').css("display","inline-block")
      $("body").css("background-color","#F1B487");
  });

// scene 5 yes option result
  $('#s4Yes').click(function(){
    $('#time').html('MONDAY AFTERNOON 4:00 PM')
    $('#info').html("Yum! Eating truly is one of the best parts existence. You're feeling sleepy after your nap. You could work on your paper some more, but you could also take a nap. What should we do?")
    $('#s5Sleep').css("display","inline-block")
    $('#s5Work').css("display","inline-block")
    $("body").css("background-color","#FC9970");

    });
// scene 5 no option result
    $('#s4No').click(function(){
      $('#time').html('MONDAY AFTERNOON 4:00 PM')
      $('#info').html("AHH! You shouldn't have skipped a meal. You had no energy and fell asleep while working. We have to Postmates fast food now. Did you want to keep working after your meal or take a break?")
      $('#s5Work').css("display","inline-block")
      $('#s5Break').css("display","inline-block")
      $("body").css("background-color","#FC9970");
      });

// scene 6 work option result
    $('#s5Work').click(function(){
      $('#time').html('MONDAY EVENING 6:00 PM')
      $('#info').html("You make decent progress on your paper. It's almost halfway done now! Would you like to eat dinner or keep working?")
      $('#s6Dinner').css("display","inline-block")
      $('#s6Work').css("display","inline-block")
            $("body").css("background-color","#2995BB");
      });
// scene 6 break option result
    $('#s5Break').click(function(){
      $('#time').html('MONDAY EVENING 6:00 PM')
      $('#info').html("You spend 2 hours scrolling through Instagram. There were lots of pictures of food. You feel a deep longing for an actual non-postmate meal. Do you want to make dinner or work on your paper? ")
      $('#s6Dinner').css("display","inline-block")
      $('#s6Work').css("display","inline-block")
            $("body").css("background-color","#2995BB");
      });
// scene 6 nap option result
    $('#s5Sleep').click(function(){
      $('#time').html('MONDAY EVENING 6:00 PM')
      $('#info').html("Ahhh. That nap hit. You wake up to the sweet aroma of tomato sauce. Your housemates are cooking dinner. Do you want to join them or keep work on your paper? ")
      $('#s6Dinner').css("display","inline-block")
      $('#s6Work').css("display","inline-block")
              $("body").css("background-color","#2995BB");
      });

// scene 7 dinner result
$('#s6Dinner').click(function(){
  $('#time').html('MONDAY EVENING 8:00 PM')
  $('#info').html("Dinner was delicious. You are a great cook. Your housemates want to hang out with you! Do you want to have fun with friends or have not have fun with your paper?")
  $('#s7Work').css("display","inline-block")
  $('#s7Chill').css("display","inline-block")
  $("body").css("background-color","#266294");

  });
// scene 7 work result
  $('#s6Work').click(function(){
    $('#time').html('MONDAY EVENING 8:00 PM')
    $('#info').html("Progress on your paper! Amazing. You're seriously hungry now tho. Keep grinding or dinner?")
    $('#s7Dinner').css("display","inline-block")
    $('#s7Work').css("display","inline-block")
    $("body").css("background-color","#266294");
    });

// scene 8 work result
$('#s7Work').click(function(){
  $('#time').html('MONDAY NIGHT 10:00 PM')
  $('#info').html("Your housemates come interupt you in your room while you're working. They're telling you they want to make a Tik Tok. Is this your moment to achieve internet fame? Or is this your moment to finish your paper?")
  $('#s8Yes').css("display","inline-block")
  $('#s8No').css("display","inline-block")
    $("body").css("background-color","#443751");
});
// scene 8: chill result
$('#s7Chill').click(function(){
    $('#time').html('MONDAY NIGHT 10:00 PM')
    $('#info').html("Your housemates are telling you they want to make a Tik Tok. Is this your moment to achieve internet fame? Or is this your moment to go back to your room and work on finishing the paper?")
    $('#s8Yes').css("display","inline-block")
    $('#s8No').css("display","inline-block")
        $("body").css("background-color","#443751");
    });
// scene 8: dinner result
    $('#s7Dinner').click(function(){
        $('#time').html('MONDAY NIGHT 10:00 PM')
        $('#info').html("As you're finishing your dinner in the dining room, your housemates invite you to make a Tik Tok. Is this your moment to achieve internet fame? Or is this your moment to go back to your room and work on finishing the paper?")
        $('#s8Yes').css("display","inline-block")
        $('#s8No').css("display","inline-block")
        $("body").css("background-color","#443751");
        });

// scene 9: Tik Tok result
      $('#s8Yes').click(function(){
          $('.button').css('color','black')
          $('#time').html('MONDAY NIGHT 12:00 AM')
          $('#info').html("Tik Tok dances are harder to learn than they seem. It's getting late now. Do you want to go to bed or stay up and work on your paper?")
          $('#s9sleep').css("display","inline-block")
          $('#s9work').css("display","inline-block")
          $("body").css("background-color","#090C11");
          $("body").css("color","black");


          });
// scene 9: dinner result
      $('#s8No').click(function(){
          $('.buttons').css('color','black')
          $('#time').html('MONDAY NIGHT 12:00 AM')
          $('#info').html("It's getting late now. Do you want to go to bed or stay up and work on your paper?")
          $('#s9sleep').css("display","inline-block")
          $('#s9work').css("display","inline-block")
          $("body").css("background-color","#090C11");
          $("body").css("color","black");


          });

// scene 10: sleep result
  $('body').css('color','#black')
$('#s9sleep').click(function(){
  $('#time').html('TUESDAY MORNING 8:00 AM')
  $('#info').html("Good Morning! Your paper is due today at 6pm. You have back to back classes from 10AM to 5PM. Do you want to get up and work on your paper?")
  $('#s10snooze').css("display","inline-block")
  $('#s10getup').css("display","inline-block")
  $("body").css("background-color","#EDE5CD");

  });
// scene 10: work result
  $('body').css('color','#black')
$('#s9work').click(function(){
  $('#time').html('TUESDAY MORNING 8:00 AM')
  $('#info').html("Good Morning! You fell asleep while working last night. Your paper is due today at 6PM. You have back to back classes from 10AM to 5PM. Do you want to get up and finish your paper?")
  $('#s10snooze').css("display","inline-block")
  $('#s10getup').css("display","inline-block")
    $("body").css("background-color","#EDE5CD");
      $('body').css('color','black')
    });

    // scene 11: snooze result
    $('#s10snooze').click(function(){
      $('#time').html('TUESDAY MORNING: 10:00 AM ')
      $('#info').html("It's time for your first class now. You will only have an hour after you finish classes today to finish up your paper. If this makes you anxious, you could skip class and just work instead. What do you want to do?")
      $('#s11paper').css("display","inline-block")
      $('#s11class').css("display","inline-block")
        $("body").css("background-color","#EDE5CD");
          $('body').css('color','black')
      });
    // scene 11: work result
    $('#s10getup').click(function(){
      $('#time').html('TUESDAY MORNING 10:00 AM')
      $('#info').html("WOW! What a plot twist! You've finished your paper early and just turned it in. Keep up the good work.")
      $('.buttons').hide()
        $("body").css("background-color","#EDE5CD");
          $('body').css('color','black')
      });

//scene 12: paper result
$('#s11paper').click(function(){
  $('#time').html('TUESDAY EVENING: 6:00PM ')
  $('#info').html("You made the right decision skipping classes. There's no way you would've have finished otherwise. How does it always come to this?")
      $('.buttons').hide()
  });
//scene 12: class result
  $('#s11paper').click(function(){
    $('#time').html('TUESDAY EVENING: 6:00PM ')
    $('#info').html("You didn't have enough time after class to finish your paper. Now you have to turn it in late. How does it always come to this?")
          $('.buttons').hide()
    });

  });
});
