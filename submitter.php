<?php
$servername= "localhost";
$username = "root";
$password = "";
$database_name = "psc_survey_collection";


$conn = mysqli_connect($servername,$username,$password,$database_name);

if (!$conn){
        die("Connection failed:" . mysqli_connect_error());
}
if (isset($_POST['submit'])){
        $Circuit = $_POST['circuit'];
        $PSCType = $_POST["psctype"];
        $LevelofCharge = $_POST["levelofcharge"];
        if (isset($_POST["caseProcess"])){
                $CaseProcessing = $_POST["caseProcess"];
        }
        else{
                // known bug in html and javascript
                $CaseProcessing = " ";
        }
        $ImplementationDate = $_POST["implementationdate"];
        $PrimaryName= $_POST["primaryname"];
        $PrimaryStreetAddress = $_POST["primaryaddress"];
        $PrimaryCity = $_POST["primarycity"];
        $PrimaryZipCode = $_POST["primaryzipcode"];
        $PrimaryPhoneNumber= $_POST["primaryphone"];
        $PrimaryEmailAddress= $_POST["primaryemail"];
        $JudgeName = $_POST["judgename"];
        $JudgeStreetAddress= $_POST["judgeaddress"];
        $JudgeCity= $_POST["judgecity"];
        $JudgeZipCode= $_POST["judgezipcode"];
        $JudgePhoneNumber= $_POST["judgephone"];
        $JudgeEmailAddress= $_POST["judgeemail"];
        $AcceptsTransfers= $_POST["transfercheck"];
        if (isset($_POST["designeename"])){
                $DesigneeName = $_POST["designeename"];
        }
        else{
                $DesigneeName = " ";
        }
        if (isset($_POST["designeeaddress"])){
                $DesigneeStreetAddress= $_POST["designeeaddress"];
        }
        else{
                $DesigneeStreetAddress = " ";
        }
        
        if (isset($_POST["designeecity"])){
                $DesigneeCity = $_POST["designeecity"];
        }
        else{
                $DesigneeCity = " ";
        }

        if (isset($_POST["designeezipcode"])){
                $DesigneeZipCode = $_POST["designeezipcode"];
        }
        else{
                $DesigneeZipCode = " ";
        }

        if (isset($_POST["designeephone"])){
                $DesigneePhoneNumber = $_POST["designeephone"];
        }
        else{
                $DesigneePhoneNumber = ' ';
        }
        if (isset($_POST["designeeemail"])){
                $DesigneeEmailAddress = $_POST["designeeemail"];
        }
        else{
                $DesigneeEmailAddress = " ";
        }
        if (isset($_POST["cocname"])){
                $CocName = $_POST["cocname"];
        }
        else{
                $CocName = " ";
        }
        if (isset($_POST["cocaddress"])){
                $CocStreetAddress = $_POST["cocaddress"];
        }
        else{
                $CocStreetAddress = " ";
        }
        if (isset($_POST["coccity"])){
                $CocCity= $_POST["coccity"];
        }
        else{
                $CocCity = " ";
        }
        if (isset($_POST["coczipcode"])){
                $CocZipCode =$_POST["coczipcode"];
        }
        else{
                $CocZipCode = " ";
        }
        if (isset($_POST["cocphone"])){
                $CocPhoneNumber= $_POST["cocphone"];
        }
        else{
                $CocPhoneNumber = " ";
        }
        if (isset($_POST["cocemail"])){
                $CocEmailAddress= $_POST["cocemail"];
        }
        else{
                $CocEmailAddress = " ";
        }
        if (isset($_POST["transfercriteria"])){
                $TransferCritera= $_POST["transfercriteria"];
        }
        else{
                $TransferCritera = " ";
        }

        $EligibilityCriteria =$_POST["eligibilitycriteria"];
        $ProgramRequirements= $_POST["programreqs"];
        $ScreeningProcedure= $_POST["screeningprocedure"];
        $ReferralProcedure= $_POST["referralprocedure"];

        $sql_query = "INSERT INTO submission_information (Circuit, PSCType, LevelofCharge, CaseProcessing, ImplementationDate,
        PrimaryName, PrimaryStreetAddress, PrimaryCity, PrimaryZipCode,PrimaryPhoneNumber,PrimaryEmailAddress,JudgeName,
        JudgeStreetAddress, JudgeCity, JudgeZipCode, JudgePhoneNumber, JudgeEmailAddress,AcceptsTransfers, DesigneeName, 
        DesigneeStreetAddress,DesigneeCity,DesigneeZipCode,DesigneePhoneNumber,DesigneeEmailAddress,CocName, CocStreetAddress,
        CocCity, CocZipCode, CocPhoneNumber,CocEmailAddress, TransferCriteria, EligibilityCriteria, ProgramRequirements, 
        ScreeningProcedure, ReferralProcedure) VALUES ('$Circuit', '$PSCType', '$LevelofCharge', '$CaseProcessing', '$ImplementationDate',
        '$PrimaryName', '$PrimaryStreetAddress', '$PrimaryCity', '$PrimaryZipCode', '$PrimaryPhoneNumber', '$PrimaryEmailAddress', '$JudgeName',
        '$JudgeStreetAddress', '$JudgeCity', '$JudgeZipCode', '$JudgePhoneNumber', '$JudgeEmailAddress', '$AcceptsTransfers' , '$DesigneeName',
        '$DesigneeStreetAddress', '$DesigneeCity', '$DesigneeZipCode', '$DesigneePhoneNumber', '$DesigneeEmailAddress', '$CocName', '$CocStreetAddress',
        '$CocCity', '$CocZipCode', '$CocPhoneNumber', '$CocEmailAddress', '$TransferCritera', '$EligibilityCriteria', '$ProgramRequirements', 
        '$ScreeningProcedure', '$ReferralProcedure')";

         if (mysqli_query($conn, $sql_query)){
                 echo("Survey Submitted Successfully");
         }
         else{
                 echo("Error" . $sql . mysqli_error($conn));
         }
        
         mysqli_close($conn);
}




