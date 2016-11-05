
//Show notes and new note form
$('.btnAddNote').on('click', function(){
  var nc = "#nc_" + $(this).data('art-id');
  $('.containerNotes').css('display', 'none');
  $(nc).css('display', 'block');
});

//Add Note
$('.btnSend').on('click', function() {

  
  var artID = $(this).data('art-id');
  var taID = "#notebody_" + artID;
  var notebody = $(taID).val();

  if (notebody.length == 0) {
    return false;
  }

  var data = {
    "notebody": notebody
  }

  var url = '/api/newnote/'+ artID;

  $.post(url, data)
  .done(function(result) {

    var nID = result;
    var notesList = "#notes_" + artID;
    $(notesList).append('<li id="'+ nID +'">' + $(taID).val() + '<button class="btnDelete" data-note-id="'+  nID + '">  <i class="tiny material-icons">delete</i></button> </li>');
    
    $(taID).val('');
  });

  return false;
});

//Delete Note
$('.containerNotes').on('click', '.btnDelete', function() {
  var nID = $(this).data("note-id");
  var url = "/api/deletenote/" + nID;

  $.post(url)
  .done(function(result){
    $('#' + nID).remove();
  });

});