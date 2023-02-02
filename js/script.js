const names = ["soumyadeep", "jogen", "sambita", "jordon", "sam", "shubham", "john"];
for (let index = 0; index < names.length; index++) {
    let element = names[index];
    if (element.charAt[0] == 'j' || element.charAt[0] == 'J') {
        // document.getElementById("demo").innerHTML = "Goodbye " + element;
        console.log("Goodbye "+element);
    }
    else {
        // document.getElementById("demo").innerHTML = "Hello " + element;
        console.log("Hello "+element);
    }
}