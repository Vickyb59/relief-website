jQuery(document).ready(function($) {
	"use strict";
	
	// Sign Up
    $('form#sign-up').on('submit', function(e){
        $('form#sign-up p.status').show().text(ajax_signup_object.loadingmessage);
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_signup_object.ajaxurl,
            data: { 
                'action': 'ajaxsignup', //calls wp_ajax_nopriv_ajaxlogin
                'nickname': $('form#sign-up #user_nickname').val(), 
                //'first_name': $('form#sign-up #first_name').val(), 
				'user_email': $('form#sign-up #user_email').val(), 
				'user_pass': $('form#sign-up #user_pass').val(), 
				'captcha_code': $('form#sign-up #captcha_code').val(), 
				'ajax_captcha': $('form#sign-up #ajax_captcha').val(), 
                'security': $('form#sign-up #security').val() },
            success: function(data){
                $('form#sign-up p.status').text(data.message);
                if (data.signup == true){
                    document.location.href = ajax_signup_object.redirecturl;
                }
            }
        });
        e.preventDefault();
    });

});

