let cells =document.querySelectorAll(".cell")
let bord=document.querySelector('#bord') as HTMLDivElement
let btu=document.querySelector('#restart') as HTMLButtonElement
let aa= document.querySelector('.game-message') as HTMLDivElement
let steps:number=0
let lunci:boolean=true
let win=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
btu.addEventListener('click',function(){
    steps=0
    aa.style.display='none'
    cells.forEach(function(item){

        let cell=item as HTMLDivElement
        cell.classList.remove('x','o')
        cell.removeEventListener('click',xoclick)
        cell.addEventListener('click',xoclick,{once : true})
    })
})
cells.forEach(function(item){
    let cell=item as HTMLDivElement
    cell.addEventListener('click',xoclick,{once : true})

})



function xoclick(event:MouseEvent){
    let target=event.target as HTMLDivElement
    if(lunci===true){
        target.classList.add('x')
        lunci=false
        bord.classList.remove('x')
        bord.classList.add('o')   
    }
    else{
        target.classList.add('o')
        lunci=true
        bord.classList.remove('o')
        bord.classList.add('x')  
    }
    steps++
    console.log(steps)
    let winplayer:boolean=winway(cells)
    if(winplayer===true){
        
        if(lunci===false){
            let hh=document.querySelector('#winner') as HTMLParagraphElement
            hh.textContent='X 赢了！'
        }else{
            let hh=document.querySelector('#winner') as HTMLParagraphElement
            hh.textContent='O 赢了！'
        }
        
        aa.style.display='block'
    }
    else if(steps===9){
        let hh=document.querySelector('#winner') as HTMLParagraphElement
            hh.textContent='平局'
            aa.style.display='block'
        
    }
}

function winway(cells:NodeListOf<Element>){
    return win.some(function(item){
        let winway1 = item[0]
        let winway2 = item[1]
        let winway3 = item[2]
        if (cells[winway3].classList[1]!==undefined&&cells[winway2].classList[1]!==undefined&&cells[winway1].classList[1]!==undefined&&cells[winway1].classList[1]===cells[winway2].classList[1]&&cells[winway3].classList[1]===cells[winway2].classList[1]){
            return true
        }
        return false
    })


}