var content ="Earlier, she faced accusations of nearly causing an electricity shortage with her promotion of green energy. When she tried to give all workers two days off a week, she found herself accused of hurting rather than increasing worker earnings and holiday"
content=content.split(" ")
console.log(content)


  function dem()
{
    let bientimer = 5;
    //get element of html
    let timer = document.getElementById('timer');
    let bieninterval = setInterval(()=>{
        if(bientimer == 1) clearInterval(bieninterval);
        bientimer--;
        timer.innerText = bientimer;
    }, 1000)


}
var boxx = document.getElementsByClassName("wordcontent")[0]
// for(let i =0; i<content.length;i++){
//     let word = document.createElement("li")
//     word.innerText=content[i]
//     boxx.appendChild(word);
//  }
function generateA_Word(numberofWord){
    for(let i =0; i<numberofWord;i++){
        let word = document.createElement("li")
        word.innerText=content[i]
        boxx.appendChild(word);
    }
}
generateA_Word(10)
