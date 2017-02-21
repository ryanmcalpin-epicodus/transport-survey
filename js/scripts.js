$(function() {
  $("form").submit(function() {
    event.preventDefault();
    $("input:checkbox[name=funny-rides]:checked").each(function(){
      var funnyTransport = $(this).val();
      $("#funny-responses").append(funnyTransport + "<br>");
    });
  });
});
