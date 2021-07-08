var express=require("express")
var firebase=require("firebase")
var http=require("http")
var app=express()
app.use(express.urlencoded())
var cors = require('cors');
app.use(cors());
// app.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

const firebaseConfig = {
    apiKey: "AIzaSyDLNvWWAs2VpgjhPi3XERBYdAAmkA8GMzg",
    authDomain: "vinweb-project.firebaseapp.com",
    databaseURL: "https://vinweb-project-default-rtdb.firebaseio.com",
    projectId: "vinweb-project",
    storageBucket: "vinweb-project.appspot.com",
    messagingSenderId: "897486945699",
    appId: "1:897486945699:web:a4ad63e2e14bb045386e16"
  };


firebase.initializeApp(firebaseConfig)

var dbref=firebase.database().ref().child("users");

app.get("/",(req,res)=>{
  res.write("Hello Welcome")
  res.end()
})

// ADD USER
app.post("/adduser",(req,res)=>{
    rno=req.body.rno;
    dbref.child(rno).set({
        rno:rno,
        name:req.body.name,
        branch:req.body.branch,
        emailid:req.body.emailid,
    })
    res.send("User added Successfully")
})

// READ USER
app.get("/users",(req,res)=>{
    dbref.once("value",(snap)=>{
        res.send(snap.val())
    })
})


// READ USER BY ID
app.get("/users/:id",(req,res)=>{
    var id=req.params.id
    dbref.child(id).once("value",(snap)=>{
        res.send(snap.val())
    })
})

// DELETE USER
app.delete("/deleteuser/:rno",(req,res)=>{
    var rno=req.params.rno
    dbref.child(rno).remove()
    console.log(rno)
    res.send("User Deleted Successfully")
})

// UPDATE USER
app.put("/updateuser/:rno",(req,res)=>{
    var rno=req.params.rno;
    dbref.child(rno).update({
        // occupation:"Student"
        name:req.body.name,
        branch:req.body.branch,
        emailid:req.body.emailid,
    })
    console.log("User Updated Successfully")
    // req.send("User Updated Successfully")
    res.end()
    
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, (err) => {
    if(err){
      console.log("error while starting server");
    }
    else{
      console.log(`Listening on http://localhost:${PORT}`);
    }
});
  


//ALL GOOD