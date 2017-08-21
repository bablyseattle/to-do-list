$(document).ready(function(){
  $(".form-inline").submit(function(event){
    event.preventDefault();
    var taskInputted = $("input#task").val();
    $("#taskList").append("<li>" +taskInputted +" "+"<input type = 'checkbox' class ='todoItemDone'>"+'<input type="submit" class="done-delete" value="Delete">' + "</li>");
    $("input:checkbox").click(function() {
      var $this = $(this);
      if(this.checked){
        $this.parent().addClass('completed');
      }else{
        $this.parent().removeClass('completed');
      }
    });
    $("input.done-delete").click(function () {
      $(this).parent().remove();
    });
    $("input#task").val("");
  });
});
