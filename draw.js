
export function drawLabirint(labirint,user){
    let container = document.querySelector(".container");
    if(container){
        container.remove()
    }
    container = createBlock("container",document.body);
    for(let i = 0; i<labirint.length; i++){
     
      let el = createBlock("row", container);
        for(let j = 0; j<labirint[i].length; j++){
            if(i === user.x && j === user.y){
             createBlock("pers",el);
            }
              else if(labirint[i][j]===3){
                  createBlock("wall", el);
              }

              else if(labirint[i][j]===4){
                  createBlock("line", el);
              }

              else if(labirint[i][j]===1){
                  createBlock("entrance", el)
              }

              else{
                  createBlock("entrance", el);
              }
        }
    }
}

function createBlock(nameOfClass, block){
 let div = document.createElement("div");
 div.classList.add(nameOfClass);
 block.appendChild(div);
 
 return div;
}