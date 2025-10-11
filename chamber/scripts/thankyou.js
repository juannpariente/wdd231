const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

document.querySelector("#results").innerHTML = `
<p><strong>Full Name</strong>: ${myInfo.get("first-name")} ${myInfo.get("last-name")}</p>
<p><strong>Email</strong>: ${myInfo.get("email")}</p>
<p><strong>Phone</strong>: ${myInfo.get("phone")}</p>
<p><strong>Business</strong>: ${myInfo.get("business")}</p>
<p><strong>Date</strong>: ${myInfo.get("timestamp")}</p>`;