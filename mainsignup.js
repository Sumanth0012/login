localStorage.clear();
function change(insname,shoname){
    cred = document.getElementsByClassName(`cred${insname}`)[0];
    if(!cred){
        let cred = document.createElement("span");
        cred.innerHTML = `<p class='text-danger cred${insname}'>${shoname} must be filled</p>`;

        let ins = document.getElementsByClassName("form")[0];
        ins.insertBefore(cred,document.getElementsByClassName(`${insname}`)[0]);
    }
}
function clearspan(s){
    cred = document.getElementsByClassName(s)[0];
    if(cred){
        cred.innerHTML = "";
    }
}


function validate(){
    ind=0;
    fname = document.getElementsByClassName("fname")[0].value
    if(fname==""){
        change("fname","First Name");
        ind=1;
    }
    else{
        clearspan("credfname");
    }

    lname = document.getElementsByClassName("lname")[0].value
    if(lname==""){
        change("lname","Last Name");
        ind=1;
    }
    else{
        clearspan("credlname");
    }

    birth = document.getElementsByClassName("birth")[0].value
    d = new Date();
    d.setFullYear(d.getFullYear()-20);
    if(birth==""){
        change("birth","Date of Birth");
        ind=1;
    }
    else{
        clearspan("credbirth");
    }
    if(Date.parse(birth)>Date.parse(d)){
        alert("Your age must be above 20yrs");
        ind=1;
    }

    empid = document.getElementsByClassName("empid")[0].value
    if(empid==""){
        change("empid","Employee Id");
        ind=1;
    }
    else{
        clearspan("credempid");
    }

    email = document.getElementsByClassName("email")[0].value
    if(email==""){
        change("email","Email");
        ind=1;
    }
    else{
        clearspan("credemail");
    }

    profle = document.getElementsByClassName("profile")[0].value
    if(!profle){
        change("profile","Profile");
        ind=1;
    }
    else{
        clearspan("credprofile");
    }

    password = document.getElementsByClassName("password")[0].value
    if(password==""){
        change("password","Password");
        ind=1;
    }
    else{
        clearspan("credpassword");
    }

    designation = document.getElementsByClassName("designation")[0].value
    if(designation==""){
        change("designation","Designation");
        ind=1;
    }
    else{
        clearspan("creddesignation");
    }

    number = document.getElementsByClassName("number")[0].value
    if(number==""){
        change("number","Contact Number");
        ind=1;
    }
    else if(String(number).length != 10){
        alert("Contact Number must have 10 digits");
        ind=1;
    }
    else{
        clearspan("crednumber");
    }

    address = document.getElementsByClassName("address")[0].value
    if(address==""){
        change("address","Address");
        ind=1;
    }
    else{
        clearspan("credaddress");
    }

    link = document.getElementsByClassName("link")[0].value
    if(link==""){
        change("link","Link");
        ind=1;
    }
    else{
        clearspan("credlink");
    }

    language = document.getElementsByClassName("language")[0].value
    if(language==""){
        change("language","Language");
        ind=1;
    }
    else{
        clearspan("credlanguage");
    }

    if(ind==0){
        localStorage.clear();
        fullname = fname+" "+lname
        d = {"name":fullname , "birth":birth,"empid":empid,"email":email,"profile":profle,"password":password,"designation":designation,"number":number,"address":address,"link":link,"language":language};
        localStorage.setItem("user",JSON.stringify(d));
        window.location.assign("profile.html");
    }
    else{
        alert("Fill all the fields");
    }
}


sgn = document.getElementsByClassName("sign")[0];
sgn.onclick = validate;
