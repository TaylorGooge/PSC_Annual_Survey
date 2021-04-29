

        // use PHPMailer\PHPMailer\PHPMailer;
        // use PHPMailer\PHPMailer\Exception;
        // use PHPMailer\PHPMailer\SMTP;
        // require 'mail/Exception.php';  //my phpmailer scripts are in a 'mail' subdirectory
        // require 'mail/PHPMailer.php';
        // require 'mail/SMTP.php';
        // $mail->isSMTP();
        // $mail->Host = 'relay-hosting.secureserver.net';
        // $mail->Port = 25;
        // $mail->SMTPAuth = false;
        // $mail->SMTPSecure = false;
        

        $to = 'taylorgooge@gmail.com'
        $from = $_['circuit']

        $pos = $_POST;
        $circuit = $_POST['circuit'];
        $psctype = $_POST['psctype'];
        $otherpsc = $_POST['otherpsc'];
        $levelofcharge = $_POST['caseProcess'];  

        $primaryname = $_POST['primaryname']; 
        $primaryaddress = $_POST['primaryaddress']; 
        $primarycity = $_POST['primarycity']; 
        $primaryzipcode = $_POST['primaryzipcode']; 
        $primaryphone = $_POST['primaryphone']; 
        $primaryemail = $_POST['primaryemail']; 

        $judgename = $_POST['judgename']; 
        $judgeaddress = $_POST['judgeaddress']; 
        $judgecity = $_POST['judgecity']; 
        $judegezipcode = $_POST['judgezipcode']; 
        $judgephone = $_POST['judgephone']; 
        $judgeemail = $_POST['judgeemail']; 


        $transfercheck = $_POST['transfercheck'];  

        $designeename = $_POST['designeename']; 
        $designeeaddress = $_POST['designeeaddress']; 
        $designeecity = $_POST['designeecity']; 
        $designeezipcode = $_POST['designeezipcode']; 
        $designeephone = $_POST['designeephone']; 
        $designeeemail = $_POST['designeeemail']; 


        $cocname = $_POST['cocename']; 
        $cocaddress = $_POST['cocaddress']; 
        $coccity = $_POST['coccity']; 
        $coczipcode = $_POST['coczipcode']; 
        $cocphone = $_POST['cocphone']; 
        $cocemail = $_POST['cocemail']; 

        $transfercriteria = $_POST['transfercriteria']; 
        $implementationdate = $_POST['implementationdate']; 
        $eligbilitycriteria = $_POST['eligibilitycriteria']; 
        $programreqs = $_POST['programreqs']; 
        $screeningprocedure = $_POST['screeningprocedure']; 
        $referralprocedure = $_POST['referralprocedure'];
        
        $subject = $_Post['circuit', 'psctype']


       

        $body = "$circuit /n
                $psctype /n
                $otherpsc /n
                $levelofcharge /n
                $primaryname /n
                $primaryaddress  /n 
                $primarycity /n
                $primaryzipcode
                $primaryphone /n
                $primaryemail /n
                $judgename /n
                $judgeaddress /n
                $judgecity /n
                $judegezipcode /n
                $judgephone /n
                $judgeemail /n
                $transfercheck /n
                $designeename /n
                $designeeaddress /n
                $designeecity /n
                $designeezipcode /n
                $designeephone /n
                $designeeemail/n
                $cocname /n
                $cocaddress /n
                $coccity /n
                $coczipcode /n
                $cocphone /n
                $cocemail /n
                $transfercriteria /n
                $implementationdate /n
                $eligbilitycriteria /n
                $programreqs /n
                $screeningprocedure /n
                $referralprocedure
                "
   




    mail ($to, $subject, $body, $from)


