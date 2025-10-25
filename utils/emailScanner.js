function scanEmail(email){
    //array of potentially suspicious email domains 
    const potentiallySuspicious = ["gmail-security.com", "account-verify.com", "update-login.com"];
    const domain = email.split("@")[1] || "";

    if(potentiallySuspicious.includes(domain)){
        return {safe: false, reason: "Email domain appears suspicious"};
    } else{
        return{safe: true, reason: "Email appears legitimate"};
    }
}

module.exports = { scanURL };