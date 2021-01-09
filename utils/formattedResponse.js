module.exports = (statusCode, body) => {
     //console.log("formatted response")
     //console.log(statusCode);
     //console.log({statusCode, body: JSON.stringify(body)})
    
    return {
        statusCode,
        body: JSON.stringify(body),
    };
};