let box = ["roblox", "minecraft", "Geametry Dash", "Dota", "FNF"]

for (let i = 0; i < box.length; i++){
    let element = box[i]
    console.log(element, i)
    if (element == "minecraft"){
        console.log('МАЕНКРАФТ!!!')
    }
}

let box2 = [2, 3, 4, 8, 7, 7, 6, 9, 2, 8, 3, 7, 4]
let res = 0

for(let i = 0; i < box.length; i++){
    res = res + box2[i]
}
console.log(res)