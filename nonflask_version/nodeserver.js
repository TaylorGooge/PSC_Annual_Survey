
const express = require('express');
const mysql= require('mysql')
const path = require("path");
const app = express();
const port = 8081


//middleware
app.use(express.static(__dirname))
app.set("port", port)



// connect to database
const pool = mysql.createConnection({
    database: "psc_submission",
    host : "localhost", 
    password : "S4mnPiW2fcd!",
    user : "root"

});

pool.connect(function(err){
    if (err) console.log("db connection error");
    else console.log("db connected");
    
});

// var createtable = `create table if not exists submissions(
//     id int primary key auto_increment,
//     circuit int not null,
//     courttype varchar(255) not null,
//     othertype varchar(255),
//     chargemisd varchar(255),
//     chargefel varchar(255),
//     chargena varchar(255),
//     caseprocesspt varchar(255),
//     caseprocesspp varchar(255),
//     caseprocesspostp varchar(255),
//     caseprocesspreadj varchar(255),
//     caseprocesspostadj varchar(255),
//     caseprocessna varchar(255) not null,
//     implementdate date not null,
//     primname varchar(255) not null,
//     primad varchar(255) not null,
//     primcity varchar(255) not null,
//     primzip varchar(255) not null,
//     primphone varchar(255) not null,
//     primemail varchar(255) not null,
//     jname varchar(255) not null,
//     jad varchar(255) not null,
//     jcity varchar(255) not null,
//     jzip varchar(255) not null,
//     jphone varchar(255) not null,
//     jemail varchar(255) not null,
//     tyes varchar(255),
//     tne varchar(255),
//     dname varchar(255),
//     dad varchar(255),
//     dcity varchar(255),
//     dzip varchar(255) ,
//     dphone varchar(255) ,
//     demail varchar(255) ,
//     dna varchar(255),
//     cname varchar(255),
//     cad varchar(255),
//     ccity varchar(255),
//     czip varchar(255) ,
//     cphone varchar(255) ,
//     cemail varchar(255) ,
//     cna varchar(255),
//     transfercrit text,
//     elig text not null,
//     preq text not null,
//     screen text not null,
//     referral text not null,
//     adm int not null,
//     com int not null,
//     term int not null,
//     part int not null

//     )`;



// pool.query(createtable,function(err,results,fields){
//     if (err) console.log(err.message)

// });



app.get("/",function(req,res, next){
    pool.query("SELECT * FROM submissions",function(err){
        if (err){
            var createstring = "CREATE TABLE WORKOUTS("+
            "id int primary key auto_increment,"+
            "circuit int not null,"+
            "courttype varchar(255) not null,"+
            "othertype varchar(255),"+
            "chargemisd varchar(255),"+
            "chargefel varchar(255),"+
            "chargena varchar(255),"+
            "caseprocesspt varchar(255),"+
            "caseprocesspp varchar(255),"+
            "caseprocesspostp varchar(255),"+
            "caseprocesspreadj varchar(255),"+
            "caseprocesspostadj varchar(255),"+
            "caseprocessna varchar(255) not null,"+
            "implementdate date not null,"+
            "primname varchar(255) not null,"+
            "primad varchar(255) not null,"+
            "primcity varchar(255) not null,"+
            "primzip varchar(255) not null,"+
            "primphone varchar(255) not null,"+
            "primemail varchar(255) not null,"+
            "jname varchar(255) not null,"+
            "jad varchar(255) not null,"+
            "jcity varchar(255) not null,"+
            "jzip varchar(255) not null,"+
            "jphone varchar(255) not null,"+
            "jemail varchar(255) not null,"+
            "tyes varchar(255),"+
            "tne varchar(255),"+
            "dname varchar(255),"+
            "dad varchar(255),"+
            "dcity varchar(255),"+
            "dzip varchar(255),"+
            "dphone varchar(255),"+
            "demail varchar(255),"+
            "dna varchar(255),"+
            "cname varchar(255),"+
            "cad varchar(255),"+
            "ccity varchar(255),"+
            "czip varchar(255),"+
            "cphone varchar(255),"+
            "cemail varchar(255),"+
            "cna varchar(255),"+
            "transfercrit text,"+
            "elig text not null,"+
            "preq text not null,"+
            "screen text not null,"+
            "referral text not null,"+
            "adm int not null,"+
            "com int not null,"+
            "term int not null,"+
            "part int not null)";
            pool.query(createstring)
        }
    res.sendFile(path.join(__dirname,"/index.html"));
    });
});



// app.get("/submit",function(req,res) {
//     var cols = "(`circuit,`courttype, `othertype, `chargemisd,`chargefel,`chargena, `caseprocesspt, `caseprocesspp, `caseprocesspostp, `caseprocesspreajd,`caseprocesspostadj, `caseprocessna, `implementdate, `primname,`primad, `primcity,`primzip, `primphone, `primemail, `jname, `jad, `jcity, `jzip, `jphone, `jemail, `tyes, `tno, `dname, `dad, `dcity, `dzip, `dphone, `demail, `dna, `cname, `cad, `ccity, `czip, `cphone, `cemail, `transfercrit,`elig, `preq, `screen, `referral, `adm, `com, `term, `part)"
//     var escape = "(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
//     var req= req.body
//     console.log(req)
//     pool.query("INSERT INTO submissions" + cols+  "VALUES" + escape, reqquery,function(err,result){
//         if (err){
//             next(err);
//             return;
//         }
//         res.send("Success")
//     });
// });

// app.get("/submit",function(req,res){
//     console.log("submit request recieved")
//     console.log(req.body)
// })


app.listen(port,() => {
    console.log("Listening on port " + port + ".")
});