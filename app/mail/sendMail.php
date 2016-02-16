<?php
/*
$contactName = isset($_REQUEST['contactName'])?$_REQUEST['contactName']:"";
$contactEmail = isset($_REQUEST['contactEmail'])?$_REQUEST['contactEmail']:"";
$contactSubject = isset($_REQUEST['contactSubject'])?$_REQUEST['contactSubject']:"";
$contactMessage = isset($_REQUEST['message'])?$_REQUEST['message']:"";
*/
$contactEmail = "noreply <noreply@ask-fast.com>";
$toEmail = "info@ask-fast.com";
$isDebug = true;
function sendMail() {

	$inputJSON = @file_get_contents('php://input');
	$form = json_decode( $inputJSON, TRUE );
	$message = 'contactName = ' . $form["name"] . "\r\n".
                        'contactEmail = ' . $form["emailAddress"] . "\r\n".
                        'contactMessage = ' . $form["message"] . "\r\n"; 
	global $toEmail;
        $header =
                'From: webform@ask-fast.com' . "\r\n" .
                'Reply-To: ' . $form["emailAddress"] . "\r\n";
        //risky custom data
        $query = explode('&', $_SERVER['QUERY_STRING'] );
        if( $form["message"] == '' ) {
		error_log("No message found for email, exiting..", 0);
		return "FALSE";
	}
        global $isDebug;
        if( $isDebug)
        {
                mail("lvdinten@ask-cs.com", 'sendMail form', $message, $header );
                //mail("xmao@ask-cs.com", 'sendMail form', $message, $header );
//              mail("tdejonge@ask-cs.com", "sendMail form", $message, $header );
                //mail("skroon@ask-cs.com",  'sendMail form', $message, $header );
                //mail("hvrooijen@ask-cs.com",  'sendMail form', $message, $header );
        }
        //$ret = mail($toEmail,'contact-formulier',$message ); //,$header);
        $ret = mail($toEmail, 'sendMail from', $message, $header );
	$handle = fopen( 'mail.log', 'ab');
        fwrite( $handle, $message."\n".$header );
        fwrite( "\n\n" );
        fclose($handle);
        if( $ret ){
                return "TRUE";
        }else{
                return "FALSE";
        }
}
echo sendMail();
?>
