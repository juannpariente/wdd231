const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

document.querySelector("#data").innerHTML = `
<p><strong>Full Name</strong>: ${myInfo.get("fname")} ${myInfo.get("lname")}</p>
<p><strong>Email</strong>: ${myInfo.get("email")}</p>`