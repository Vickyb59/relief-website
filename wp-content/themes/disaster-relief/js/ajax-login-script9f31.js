jQuery(document).ready(function($) {
	
	"use strict";
	
	// Perform AJAX login on form submit
	
    $('form#login-style-1').on('submit', function(e){
        $('form#login-style-1 p.status').show().text(ajax_login_object.loadingmessage);
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_login_object.ajaxurl,
            data: { 
                'action': 'ajaxlogin', //calls wp_ajax_nopriv_ajaxlogin
                'username': $('form#login-style-1 #username').val(), 
                'password': $('form#login-style-1 #password').val(), 
                'security': $('form#login-style-1 #security').val() 
			},
            success: function(data){
                $('form#login-style-1 p.status').text(data.message);
                if (data.loggedin == true){
                    document.location.href = ajax_login_object.redirecturl;
                }
            }
        });
        e.preventDefault();
    });

});


jQuery(document).ready(function($) {
	
	"use strict";
	
	// Perform AJAX login on form submit
	
    $('form#login-style-2').on('submit', function(e){
        $('form#login-style-2 p.status').show().text(ajax_login_object.loadingmessage);
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_login_object.ajaxurl,
            data: { 
                'action': 'ajaxlogin', //calls wp_ajax_nopriv_ajaxlogin
                'username': $('form#login-style-2 #username').val(), 
                'password': $('form#login-style-2 #password').val(), 
                'security': $('form#login-style-2 #security').val() },
            success: function(data){
                $('form#login-style-2 p.status').text(data.message);
                if (data.loggedin == true){
                    document.location.href = ajax_login_object.redirecturl;
                }
            }
        });
        e.preventDefault();
    });

});
