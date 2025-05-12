function maskEmail(email){
    const [username, domain] = email.split('@');
    const maskedUsername = username[0] + '*'.repeat(username.length-2)+username[username.length -1];
    return maskedUsername + '@'+domain;
}
let email = "razdwatrzy4@example.com";
console.log(maskEmail(email));