const express = require("express");
const app = express();
const mysql = require("mysql");
const { v4: uuidv4 } = require('uuid');
const bodyParser = require("body-parser");
let ejs = require('ejs')
const path = require("path")


app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));


//connecting db
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'Root123!',
    database: 'userdb'
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log("The user database has connected successfully")
})


app.get("/", (req, res) => {
    const query = "select * from users";
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
    
        res.render('index.ejs', {
            data: result
        })
    });
})

app.get("/addData", (req, res) => {
    res.render("add_data.ejs") 
})


app.post("/add_data", (req, res) => {
    console.log("hello")
   let id = uuidv4();
   let firstname = req.body.firstname;
   let lastname = req.body.lastname;
   let email = req.body.email;
   let password = req.body.password;
   let confirmpassword = req.body.confirmpassword;

   const postQuery = "insert into users values('" + id + "','" + firstname + "','" + lastname + "', '" + email + "', '" + password + "', '" + confirmpassword + "');";

   db.query(postQuery, (err, result) => {
    if (err) {
        return res.status(500).send(err);
    }
    res.redirect("/")
}); 
})

// app.get("/specific user/:id")


app.get("/home", (req, res) => {
    
})


//edit the user dat
app.post("/edit/:id", (req, res) => {
    const id = req.params.id;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email
    const password = req.body.password
    const confirmpassword = req.body.confirmpassword;
    
    const editQuery = "update users set firstname = '"+firstname+"',lastname = '"+lastname +"', email= '"+email+"',password= '"+password+"',confirmpassword= '"+confirmpassword+"'  where id = '"+id +"' ";
    db.query(editQuery, (err, result) => {
        if(err){
            return res.status(500).send(err)   
        }
        res.redirect("/")
        
    })
})

app.get("/getUser/:name", (req, res) => {
   const name = req.params.name;
   const getQuery = "select * from users where firstname = ?";
   db.query(getQuery,name, (err, result) => {
        
    if (err) {
        return res.status(500).send(err);
    }
    res.render("updateForm.ejs", {
      updateData: result[0],
    })
    }
    ) 
})


app.get("/delete/:id", (req, res) => {
    const getId = req.params.id;
    console.log(getId)
//     const deleteQuery = "delete from users where id = '"+getId +"' ";
//     db.query(deleteQuery, (err, result) => {
        
//     if (err) {
//         return res.status(500).send(err);
//     }
//     res.redirect("/")
// }
//     ) 

      res.redirect("/")   
})



app.listen(4000, () => {
    console.log("Server listening on port 4000");
})