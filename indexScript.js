$(document).ready(function () {
// hovering over weekliesButton slides down weeklies
  $('.weekliesButton span').click(function(){
    $('#projects').slideUp();
    $('#weeklies').slideToggle('slow');
  });
// // hovering over weeklies shows them, but leaving hides them
//   $("#weeklies").hover(function(){
//     $(this).slideDown();
//     }, function(){
//     $(this).slideUp();
//   });

// hovering over projectsButton slides down projects
  $('.projectsButton span').click(function(){
    $('#weeklies').slideUp();
    $('#projects').slideToggle('slow');
  });
// // hovering over weeklies shows them, but leaving hides them
//   $("#projects").hover(function(){
//     console.log('project is being hovered over');
//     $(this).show();
//     }, function(){
//     console.log('project is no longer being hovered over');
//     $(this).slideUp();
//   });

});
