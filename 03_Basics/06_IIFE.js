// Immediately Invoked Function Expression
// To end IIFE , Semicolon (;) is used

function DB(){
    console.log("DB Connected")
}
DB();
 
(function DB2() {
    console.log(`DB2 connected`)
})();

((name) => {
     console.log(`DB3 Connected ${name}`)
    })("nikita");

