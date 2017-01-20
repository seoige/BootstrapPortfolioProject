$(function() {
  // your code will go here
  $.ajax({
     url: 'https://www.codeschool.com/users/2764134.json',
     dataType: 'jsonp',
     success: function(response) {
       // handle response
       addCompletedCourses(response.courses.completed);
       addBadges(response.badges);
     }
   });

   function addCompletedCourses(completedCourses){

     var $badges = $('#badges');

     completedCourses.forEach(function(item){
       var $course = $('<div />', {
         'class': 'course'
       }).appendTo($badges);

       $('<h3 />', {
         text: item.title
       }).appendTo($course);

       $('<img />', {
         src: item.badge
       }).appendTo($course);

       $('<a />', {
         'class': 'btn btn-primary',
         target: '_blank',
         href: item.url,
         text: 'Explore Course'
       }).appendTo($course);

     });
   }

   function addBadges(badges){
     var $badgesDiv = $('#badges2');

     //console.dir(firstBadge);
     // TODO add 21foreach loop
     badges.forEach(function(item){
       console.dir(item);
       var $achievement = $('<div />', {
         'class': 'course'
       }).appendTo($badgesDiv);

       $('<img />', {
         src: item.badge
       }).appendTo($achievement);

       $('<h3 />', {
         'id': 'achieveh3',
         text: item.name
       }).appendTo($achievement);

     });

   }

});
