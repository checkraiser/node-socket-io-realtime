// Simple shorthand to log messages to screen
var dbug = {

    log: function(message) {

        $('#console').prepend('<li>' + message + '</li>');

    }
    
};