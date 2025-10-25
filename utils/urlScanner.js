function scanURL(url){
    //array of potentially suspicious words/phrases
    const potentiallySuspicious = ["verify", "login", "redeem", "update", "secure", "account"];
    const isSuspicious = potentiallySuspicious.some(pattern => url.toLowerCase().includes(pattern));

    if(!url.startsWith("http"))
    {
        return {safe: false, reason: "URL missing protocol (http/https)"};
    } else if(isSuspicious){
        return {safe: false, reason: "URL contains phishing-like keywords"};
    } else{
        return {safe: true, reason: "No obvious phishing indicators detected"};
    }
}

module.exports = { scanURL };