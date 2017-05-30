<?php
require 'vendor/autoload.php';
use Mailgun\Mailgun;

$mg = new Mailgun("key-d7e0b5ea1b0065edd4256eb05d2230ad");
$domain = "sandbox1f6f34d9284243d6b696686fd9d324d5.mailgun.org";

if (isset($_POST['email'])){
  filter_var_array($_POST, FILTER_SANITIZE_STRING);

  $to = "nathaliazxavier@gmail.com";
  $from = $_POST["email"];
  $subject = $_POST["name"];
  $msg = $_POST["message"];

  # Now, compose and send your message.
  $mg->sendMessage($domain, array('from'    => $from,
                                  'to'      => $to,
                                  'subject' => $subject,
                                  'text'    => $msg));

  header("Location: /#mail");

}

