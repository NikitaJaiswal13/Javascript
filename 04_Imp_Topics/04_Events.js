// document.getElementById('c3').onclick = function (){
//     console.log("Clicked")
// }

/* 
    Event Propagation
        1. False - Bubbling (⬆️) (Default)
        2. True - Capturing (⬇️)
*/

//Example of bubbling

/* document.getElementById('p1').addEventListener('click' , function(e) {
    console.log("p1 clicked")
})

document.getElementById('c3').addEventListener('click' , function(e){
    console.log("c3 clicked")
})
*/

//Example of capturing

/* document.getElementById('p1').addEventListener('click' , function(e) {
    console.log("p1 clicked")
 } , true)

document.getElementById('c3').addEventListener('click' , function(e){
    console.log("c3 clicked")
} , true)
 */

document.querySelector('.p-box').addEventListener('click' , function(e){
    console.log(e.target)
    // console.log(e.target.parentNode)

    let removeIt = e.target;
    removeIt.remove();

} , false)