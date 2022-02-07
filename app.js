// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js";
import { getDatabase,ref,set,push,onValue,remove,update } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase


const firebaseConfig = {
    apiKey: "AIzaSyBPLroqYrP2JgkK4AbnAwl3K-F968uhhdk",
    authDomain: "toodopppp.firebaseapp.com",
    databaseURL: "https://toodopppp-default-rtdb.firebaseio.com",
    projectId: "toodopppp",
    storageBucket: "toodopppp.appspot.com",
    messagingSenderId: "810864506260",
    appId: "1:810864506260:web:20aa30b90150b219614b81",
    measurementId: "G-RWPYCMJJN7"
  };


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase()








window.add = function(){
    var obj = {
        name : document.getElementById('inputtxt').value
    }
    var userRef = push(ref(database,'Users/'))
    obj.id = userRef.key
    set(userRef,obj)

}

window.get= function(){
    var Users = document.getElementById('Users')

    onValue(ref(database, 'Users'),function(Data){
        Users.innerHTML=''
        console.log(Data.val());
        
        var UsersList = Object.values(Data.val())
        for(var i =0; i<UsersList.length; i++){

            var User = UsersList[i]
            Users.innerHTML+=`UserName : ${User.name} <button onclick="dell('${User.id}')">deletebtn</button> <button onclick="updateData('${User.id}')">update</button> <br/>`
            console.log(User);

        }


    })
}


window.dell=function(id){

remove(ref(database,`Users/${id}`))

}
window.updateData=function(id){
    var name = prompt('Enter Update')

    update(ref(database,`Users/${id}`), {name: name})
    
}
window.dellall=function(){

    remove(ref(database,`Users/`))
    
}