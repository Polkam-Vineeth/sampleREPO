var express=require("express")
var jwt=require("jsonwebtoken")
var app=new express()
var secretkey="Vin"

var users=[
    {
        id:1255,
        name:"Vineeth"
    }
    ,{
        id:101,
        name:"AA"   
    }
]

app.get("/",(req,res)=>{
  res.write("JWT demo")
  res.end()
})

app.get("/public",(req,res)=>{
  res.send(users)
})

app.get("/users",verifytoken,(req,res)=>{
    res.send(users)
})

app.post("/login",(req,res)=>{
    const user={
        uname:"Vin",
        pass:55
    }
    jwt.sign({user:user},secretkey,{ expiresIn: '60s'},(err,token)=>{
        res.send({token:token})
    })
})

function verifytoken(req,res,next){
    let bheader=req.headers["authorization"]
    token=bheader.split(' ')[1]
    if(token){
        jwt.verify(token,secretkey,(err,decoded)=>{
            if(err){
                // return res.sendStatus(401); ||  res.sendStatus(403);
                return res.json({
                    success:false,
                    message:"Token is not valid"
                })
            }else{
                req.decoded=decoded;
                next()
            }
        })
    }  
}

app.listen(4000,()=>{
    console.log("Server Started Successfully...")
    console.log(`Listening on http://localhost:4000`);
})


// function verifyToken(req, res, next){
//   const authHeader = req.headers.authorization;
//   if (authHeader) {
//       const token = authHeader.split(' ')[1];
//       jwt.verify(token, secret, (err, user) => {
//           if (err) {
//               return res.sendStatus(403);
//           }
//           req.user = user;
//           next();
//       });
//   } 
//   else {
//       
//   }
// };