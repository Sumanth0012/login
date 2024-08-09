function change(){
    try{
        cred = document.getElementsByClassName("fname")[0];
        console.log(cred.innerText);
    }
    catch{
        cred = document.createElement("span");
        node = document.createTextNode("First Name must be filled");
        cred.appendChild(node);

        let ins = document.getElementsByClassName("inside_content")[0];
        ins.appendChild(cred);
    }
}

function validate(){
    ind=0;
    fname = document.getElementsByClassName("fname")[0].value
    if(fname==""){
        change();
        alert("First Name must be filled");
        ind=1;
    }

    lname = document.getElementsByClassName("lname")[0].value
    if(lname==""){
        alert("Last Name must be filled");
        ind=1;
    }

    birth = document.getElementsByClassName("birth")[0].value
    d = new Date();
    d.setFullYear(d.getFullYear()-20);
    if(birth==""){
        alert("Date of Birth must be filled");
        ind=1;
    }
    else if(Date.parse(birth)>Date.parse(d)){
        alert("Your age must be above 20yrs");
        ind=1;
    }

    empid = document.getElementsByClassName("empid")[0].value
    if(empid==""){
        alert("Employee Id must be filled");
        ind=1;
    }

    email = document.getElementsByClassName("email")[0].value
    if(email==""){
        alert("Email must be filled");
        ind=1;
    }

    profle = document.getElementsByClassName("profile")[0].value
    if(!profle){
        alert("Profile must be uploaded");
        ind=1;
    }

    password = document.getElementsByClassName("password")[0].value
    if(password==""){
        alert("Password must be filled");
        ind=1;
    }

    designation = document.getElementsByClassName("designation")[0].value
    if(designation==""){
        alert("designation must be filled");
        ind=1;
    }

    number = document.getElementsByClassName("number")[0].value
    if(number==""){
        alert("Contact Number must be filled");
        ind=1;
    }
    else if(String(number).length != 10){
        alert("Contact Number must have 10 digits");
        ind=1;
    }

    address = document.getElementsByClassName("address")[0].value
    if(address==""){
        alert("Address must be filled");
        ind=1;
    }

    link = document.getElementsByClassName("link")[0].value
    if(link==""){
        alert("Link must be filled");
        ind=1;
    }

    language = document.getElementsByClassName("language")[0].value
    if(language==""){
        alert("Language must be filled");
        ind=1;
    }

    if(ind==1){
        window.location.assign("Signup.html");
    }
    else{
        localStorage.clear();
        fullname = fname+" "+lname
        d = {"name":fullname , "birth":birth,"empid":empid,"email":email,"profile":profle,"password":password,"designation":designation,"number":number,"address":address,"link":link,"language":language};
        localStorage.setItem("user",JSON.stringify(d));
        window.location.assign("profile.html");
    }
}


sgn = document.getElementsByClassName("sign")[0];
sgn.onclick = validate;
