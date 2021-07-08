const firebaseConfig = {
  apiKey: "AIzaSyDLNvWWAs2VpgjhPi3XERBYdAAmkA8GMzg",
  authDomain: "vinweb-project.firebaseapp.com",
  databaseURL: "https://vinweb-project-default-rtdb.firebaseio.com",
  projectId: "vinweb-project",
  storageBucket: "vinweb-project.appspot.com",
  messagingSenderId: "897486945699",
  appId: "1:897486945699:web:a4ad63e2e14bb045386e16"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// var dbRef = firebaseConfig.database().ref();

  function createStudent(){
      console.log("Inserting!!");
      let uname=document.getElementById('uname').value;
      let rno=document.getElementById('rno').value;
      let email=document.getElementById('email').value;
      let dbRef=firebase.database().ref().child('students');
      dbRef.child(rno).set({
          uname:uname,
          rno:rno,
          email:email
      })
      console.log("Added to the DB!")
  }
  
  function deleteStudent(){
    console.log("Delete Student");
    let uid=window.prompt("Enter the roll no of the student to be deleted");
    let dbRef=firebase.database().ref().child('students');
    dbRef.child(uid).remove();
    console.log(uid+" removed 😢");
  }

  function updateStudent(){
    console.log("Update");
    // let uname=document.getElementById('uname').value;
    // let rno=document.getElementById('rno').value;
    // let email=document.getElementById('email').value;

    let rollno=window.prompt("Enter the rollno to update");
    let username=window.prompt("Enter the new username to update");
    let emailid=window.prompt("Enter the  new email to update");
    let dbRef=firebase.database().ref().child('students');
    dbRef.child(rollno).update({
        uname:username,
        // rno:rollno,
        email:emailid
    })
    console.log("details updated");
  }


  function viewStudents(){
    console.log("<<<Student Details>>>")

    var x = document.getElementById("list");
    x.style.display = "block";
    let dbRef=firebase.database().ref().child('students');
    
    dbRef.on('child_added',(snap) => {
        // console.log(snap.key)
        // let table=document.createElement("TABLE")
        // list=document.getElementById("list")
        // list.appendChild(table)

        console.log(snap.val().uname)
        console.log(snap.val().rno)
        console.log(snap.val().email)
        
        
        
        var tab = document.getElementById("list");
        // let style=document.createElement("style")
        tab.border="1";
        tab.style.fontSize="22px";
        tab.style.width="100%";
        var row = tab.insertRow(-1);
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        var cell3 = row.insertCell(-1);
        cell1.innerHTML = snap.val().uname
        cell2.innerHTML = snap.val().rno
        cell3.innerHTML = snap.val().email         
    })
}  