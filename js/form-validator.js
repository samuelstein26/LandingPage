// Disappear confirm form resubmission window
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}

// Validator
$(document).ready(function() {
    $("#newletter-form").validate({
        rules: {
        name : {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true
        }
      },
      messages : {
        name: {
          minlength: "O nome deve conter pelo menos 3 caracteres"
        },
        email: {
          email: "O email deve ser no formato: abc@domain.yxz"
        }
      }
    });
  });