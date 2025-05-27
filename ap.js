function generateRandomName(){
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
    const nameLength = Math.floor(Math.random()*3) + 6;

    let randomName = "";
    for (let i=0; i< nameLength; i++){
        const randomIndex = Math.floor(Math.random()* characters.length);
        randomName += characters.charAt(randomIndex);
    }

    return randomName +"png"
}

function generateRandomImageName(){
    const imageNumber = Math.floor(Math.random()*40)+1;
    return `img${imageNumber}.png`
}