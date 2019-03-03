function test(){
    alert('test')
}




function getLinks(){
    let linkArray = []
    Links = document.querySelectorAll(".mw-parser-output i a")

    for (let i = 0; i<numLinks.length; i++){
        linkArray.push(Links[i].href)
    }
    console.log(linkArray)
}


getlinks()

