  $(function (){
  function buildHTML(message){
    var addImage = (message.image !== null) ? `<img class = "image_size", src="${message.image}">` : '' 

    　　var html = `<div class="message">
         <div class="upper-message">
            <div class="upper-message__user-name">
              ${message.user_name}
            <div class="upper-message__user-name__date">
              ${message.date}
            </div>
         </div>
            <div class="lower-meesage">
            <p class="lower-message__content">
             ${message.content}
            </p>
          </div>
          <p class = "user-image">
            ${addImage}
          </p>`
    
          return html
  }
$('.new_message').on('submit', function(e){
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action')
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(data){
        var html = buildHTML(data);
        $('.messages').append(html);
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
        $('form')[0].reset();
      })
      .fail(function(){
        alert('error');
      });
      return false;
    });
  });