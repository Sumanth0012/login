if(localStorage.length != 0){
    window.location.assign("profile.html");
}

class ouruser {
    constructor(name,password,designation,address,number,email,link,language,profile){
      this.name = name;
      this.password = password;
      this.designation = designation;
      this.address = address;
      this.number = number;
      this.email = email;
      this.link = link;
      this.language = language;
      this.profile = profile;
    }
  }

const userlist = []
   
  userlist.push(
    new ouruser(
      "admin",
      "admin",
      "Programmer",
      "Masjid Banda, Hydarabad",
      "9876543210",
      "admin@beehyv.com",
      "https://moodle.beehyv.com/",
      "English",
      "profile_web.png"
    )
  );
  userlist.push(
    new ouruser(
      "vineetks",
      "vineetks",
      "Programmer",
      "Masjid Banda, Hydarabad",
      "9450788108",
      "vineet@beehyv.com",
      "https://home.iitk.ac.in/~vineetks",
      "English",
      "profile_web.png"
    )
  );
  userlist.push(
    new ouruser(
      "sumanth",
      "sumanth",
      "Developer",
      "Masjid Banda, Hydarabad",
      "9876543210",
      "admin@beehyv.com",
      "https://moodle.beehyv.com/my/",
      "English",
      "profile_web.png"
    )
  );



check = () => {
    let n = document.getElementsByClassName("inpuser")[0].value;
    let p = document.getElementsByClassName("inppassword")[0].value;
    for (let user of userlist){
        if(n==user.name && p==user.password){
            localStorage.clear();
            localStorage.setItem(user,JSON.stringify(user));
            window.location.assign("profile.html");
        }
    }
    try{
        let cred = document.getElementsByTagName("h4")[0];
        console.log(cred.innerText);
    }
    catch{
        let cred = document.createElement("h4");
        let node = document.createTextNode("Wrong Credentials");
        cred.appendChild(node);

        let ins = document.getElementsByClassName("inside_content")[0];
        ins.appendChild(cred);
    }
}

btn = document.getElementsByClassName("login_btn")[0];
btn.onclick = check;