let printf = document.getElementsByClassName('count') // => arr
                                    // ByID => dung ohan tu 
let counter = 60;
function count(a) {
    counter--;
    console.log(counter);
    let b=a;
    console.log(b+counter);
    printf[0].innerText = counter;
    printf[1].innerText = b+counter;

}

function dem() {
    setInterval(()=>{count(10)},1000);
}
