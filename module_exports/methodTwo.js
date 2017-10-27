var method = function (data) {
    console.log("Method Two : "+ data);
}

var msg = "module.exports = { method : method_name , variable : variable_name }"

module.exports = {
    method : method,
    msg : msg
}