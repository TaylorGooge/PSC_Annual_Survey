const express = require('express')
const app = express()
let port = process.env.PORT || 3000
require('dotenv').config()
const { auth,requiresAuth } = require('express-openid-connect')
const path = require('path')
let mysql = require('mysql')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set("views", path.join(__dirname))
app.set("view engine", "ejs")
app.use(express.static(__dirname))
app.set('port',port)


const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    // baseURL: 'http://localhost:3000',
    baseURL:  'https://psc-annual-survey.herokuapp.com',
    clientID: 'tdMEnxkOd0V5hePoUwXWfjT59NrYf7Sr',
    issuerBaseURL: 'https://dev-stdf3vge.us.auth0.com'
};

let pool = mysql.createPool({
    user: 'doadmin',
    password: 'k0y4c30t4td4mu10',
    host: 'db-mysql-nyc3-21953-do-user-9785524-0.b.db.ondigitalocean.com',
    port: '25060',
    database: 'defaultdb',
    sslmode: 'REQUIRED'
})

if (pool) { // mysql is started && connected successfully.
    console.log('Connection Success')
} else {
    console.log('Cant connect to db, Check ur db connection')
}

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));
app.get("/", requiresAuth(),function (req, res ) {
    //res.send(req.oidc.isAuthenticated() ? 'Logged in' :  'Denied')
    let user = (JSON.stringify(req.oidc.user.email))
    user = user.replace(/"/g, '\'');
    let string = "Select * FROM survey WHERE completeremail = " +  user 
    pool.query(string, function (err,result) {
        if (err) {
            throw (err)
        }
        if (result.length > 0) {
            let user1 = {
                completeremail: result[0].completeremail,
                circuit: result[0].circuit,
                county: result[0].county,
                courttype: result[0].courttype,
                otherpsctype: result[0].otherpsctype,
                chargefel: result[0].chargefel,
                chargemisd: result[0].chargemisd,
                chargena: result[0].chargena,
                pretrial: result[0].pretrial,
                preplea: result[0].preplea,
                postplea: result[0].postplea,
                preadj: result[0].preadj,
                postadj: result[0].postadj,
                caseprocessna:result[0].caseprocessna,
                impdate: result[0].impdate,
                primaryname: result[0].primaryname,
                primaryaddress: result[0].primaryaddress,
                primarycity: result[0].primarycity,
                primaryzip: result[0].primaryzip,
                primaryphone: result[0].primaryphone,
                primaryemail: result[0].primaryemail,
                judgename: result[0].judgename,
                judgeaddress:result[0].judgeaddress,
                judgecity: result[0].judgecity,
                judgezipcode: result[0].judgezipcode,
                judgephone: result[0].judgephone,
                judgeemail: result[0].judgeemail,
                transferyes: result[0].transferyes,
                designeename: result[0].designeename,
                designeeaddress: result[0].designeeaddress,
                designeecity: result[0].designeecity,
                designeezip: result[0].designeezip,
                designeephone: result[0].designeephone,
                designeeemail: result[0].designeeemail,
                clerkname: result[0].clerkname,
                clerkaddress: result[0].clerkaddress,
                clerkcity: result[0].clerkcity,
                clerkzipcode: result[0].clerkzipcode,
                clerkphone: result[0].clerkphone,
                clerkemail: result[0].clerkemail,
                transferreq: result[0].transferreq,
                referralproc: result[0].referralproc,
                screeningproc: result[0].screeningproc,
                eligibilitycrit: result[0].eligibilitycrit,
                admissions:result[0].admissions,
                completions: result[0].completions,
                terminations: result[0].terminations,
                numserved: result[0].numserved,
                submitbutton: result[0].submitbutton
                }
            res.render('form', {
                user: user1
            })
        } else {
            let user2 = {
                completeremail: user,
            }
            res.render('newform',{
                user: user2
            })
        }
    })  
})

app.post('/submit', function (req, res) {
    let data = req.body
    let keys = Object.keys(data)
    let vals = []
    string = "INSERT INTO survey (" + keys + ") VALUES ("

    for (let i in data ){
        if (i === "submitbutton"){
            string = string + "?)"
            vals.push(data[i])
        } else {
       string = string  + "?,"
       vals.push(data[i])
        }
    }
    pool.query(string,vals,function (err, result) {
        if(err) {
            throw(err)
        } else{
            res.render('complete')
        }
    })
})

app.post('/update', function (req, res) {
    let data = req.body
    let email = pool.escape(data['completeremail'])
    let string = "UPDATE survey SET "
    let vals = []
  
    
    for (let i in data) {
        if (i == "completeremail") { 
            string = string + i + "= ? "
            vals.push(data[i]) 
        }else {
        string = string  + "," + i + "= ? "
        vals.push(data[i])   
        } 
    }
    string = string + "WHERE completeremail= " + email
    pool.query(string,vals, function (err, result) {
        if (err){
            throw(err)
        }
        res.render('complete')
    })
})
// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });
  
   app.listen(port, function (){
       console.log("Listening on port " + port)
   })