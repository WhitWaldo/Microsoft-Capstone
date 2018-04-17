var address;
var rooms = [];

function setPw() {
    var pw = prompt("Please enter your password", "1234");
    if (pw != null) {
        password = pw;
    }
    return password;
}
$('#inputClick').click(function() {
    address = $('#linkInput').val();  

    if (address == ''){
        alert("Please Enter a Non-empty Name!");
        event.preventDefault();
    }
    else{
        rooms.push(address);
        alert("Your project name is "+rooms);
        window.open(address);  
    }

});
//socket.join(address);

$('#searchClick').click(function() {
    address = $('#linkInput').val(); 
    pw = setPw();
    if (pw == "1234"){
        window.open(address);
    }
    else{
        alert("We cannot find your project!");
        event.preventDefault();
    }
});

//var Globals = {
//    'domain': address;
//}
//
//module.exports = Globals;