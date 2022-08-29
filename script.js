let namesec =document.getElementById("name-sec")
let emailsec = document.getElementById("email-sec")
let phone = document.getElementById("phone-sec")
let file = document.getElementById("file-sec")


let namerror = document.getElementById("name-error") 
let emailerror = document.getElementById("email-error") 
let numerror = document.getElementById("num-error") 
let proerror = document.getElementById("profile-error")

let formsec= document.forms['formsec'];

formsec.addEventListener("submit", (e) =>{
   e.preventDefault();


if(namesec.value === ""){
    namerror.innerHTML="Name is required"
    namerror.style.color = "red"
}else{
    namerror.style.display = "none"
}
if(emailsec.value.includes('@') && emailsec.value.includes('.')){
}else if(emailsec.value ===""){
    emailerror.innerHTML="Please input your email address"
    emailerror.style.color = "red"
}else{
    emailerror.innerHTML="Invalid Email Address"
    emailerror.style.color = "red"
}

if(phone.value == "" || phone.value ==0){
    numerror.innerHTML = "Your contact is required"
}else if (phone.value.startsWith('080')
||phone.value.startsWith('091') 
||phone.value.startsWith('090') 
||phone.value.startsWith('081')
||phone.value.startsWith('070')){
} else{
    numerror.innerHTML="Invalid Phone-number"
   
 
}
 if(phone.value.length > 11){
    numerror.innerHTML = "Phone number is greater than 11"
}

if(!namerror.value || !emailerror.value || !numerror.value || !proerror.value){
    document.getElementById("Username").innerHTML=namesec.value
    document.getElementById("Useremail").innerHTML=emailsec.value
    document.getElementById("User-number").innerHTML=phone.value
    document.getElementById("User-profile").innerHTML=file.value

}
if (!(phone.value.startsWith('080')
||phone.value.startsWith('091') 
||phone.value.startsWith('090')
||phone.value.startsWith('081') 
||phone.value.startsWith('070'))){
    document.getElementById("User-number").style.display = "none"
    
} 
if(!(emailsec.value.includes('@') && emailsec.value.includes('.'))){
    document.getElementById("Useremail").style.display = "none"
}
    if(file.value== ""|| file.value == 0){
    proerror.innerHTML = "please upload a file"
    proerror.style.color = "red"
}else if(file.files[0].size > (1024*1024*1) ){
    proerror.innerHTML ="image greater than 1MB"
    proerror.style.color = "red"
}else{
    proerror.style.display="none"
} 


})



















// function files(){
//     let file= document.getElementById('file-sec').value
//     let size = (parseInt(file.size) / 1024).toFixed(2);
//     let imagename = file.name;
//     let lastmodfy = file.lastModifiedDate
//     document.getElementById('img').src = "images/" + imagename
//     document.querySelector('#User-profile').innerHTML = `Name: ${imagename} <br>
//     Size: ${size} MB <br> Modified Date: ${lastmodfy} <br>
//     `

// }
// console.log(formsec)

// if(file.value)