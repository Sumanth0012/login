if(localStorage.length == 0){
    window.location.assign("login.html");
}
let d = JSON.parse(localStorage.getItem(localStorage.key(0)));

function store(){
    document.getElementsByClassName("user_name")[0].innerHTML = d.name;
    document.getElementsByClassName("user_designation")[0].innerHTML = d.designation;
    document.getElementsByClassName("user_address")[0].innerHTML = d.address;
    document.getElementsByClassName("user_number")[0].innerHTML = d.number;

    document.getElementsByClassName("user_email")[0].innerHTML = d.email;
    document.getElementsByClassName("user_email")[0].href = `mailto:${d.email}`;

    document.getElementsByClassName("user_link")[0].innerHTML = d.link;
    document.getElementsByClassName("user_link")[0].href = `${d.link}/`;

    document.getElementsByClassName("user_language")[0].innerHTML = d.language;
    let p = d.profile.split('\\');
    if(p){document.getElementsByClassName("user_profile")[0].src = p[p.length-1];}
}
store();

let out = document.getElementsByClassName("logout")[0];
out.addEventListener("click",function (){
    localStorage.clear();
    window.location.assign("login.html");
});


let sign = document.getElementsByClassName("signup")[0];
sign.addEventListener("click",function (){
    localStorage.clear();
    window.location.assign("Signup.html");
});

function modalreflect(){
    let user_name = document.getElementsByClassName("user_name")[0].innerText;
    let user_designation = document.getElementsByClassName("user_designation")[0].innerText;
    let user_address = document.getElementsByClassName("user_address")[0].innerText;
    let user_number = document.getElementsByClassName("user_number")[0].innerText;
    let user_email = document.getElementsByClassName("user_email")[0].innerText;
    let user_link = document.getElementsByClassName("user_link")[0].innerText;
    let user_language = document.getElementsByClassName("user_language")[0].innerText;
    
    document.getElementsByClassName("name")[0].value = user_name;
    document.getElementsByClassName("designation")[0].value = user_designation;
    document.getElementsByClassName("address")[0].value = user_address;
    document.getElementsByClassName("number")[0].value = user_number;
    document.getElementsByClassName("email")[0].value = user_email;
    document.getElementsByClassName("link")[0].value = user_link;
    document.getElementsByClassName("language")[0].value = user_language;
}
modalreflect();

function modal(){
    let name = document.getElementsByClassName("name")[0].value;
    let designation = document.getElementsByClassName("designation")[0].value;
    let address = document.getElementsByClassName("address")[0].value;
    let number = document.getElementsByClassName("number")[0].value;
    let email = document.getElementsByClassName("email")[0].value;
    let link = document.getElementsByClassName("link")[0].value;
    let language = document.getElementsByClassName("language")[0].value;
    let profile = document.getElementsByClassName("profile")[0].value;
    
    p = profile.split('\\');
    
    d.name = name;
    d.designation = designation;
    d.address = address;
    d.number = number;
    d.email = email;
    d.link = link;
    d.language = language;
    if(p!=""){d.profile = p;}
    localStorage.clear();
    localStorage.setItem("user",JSON.stringify(d));
    store();
}

save = document.getElementsByClassName("modalsave")[0]
save.onclick = modal;
