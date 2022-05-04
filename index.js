const elem = document.querySelector('.demo')
const op = document.querySelector('.output')
let new_list = []
let new_link = {}

if(elem.style.display == 'none'){
    elem.style.display = 'block'

    fetch('https://api.codetabs.com/v1/proxy?quest=time.com/').
    then((response) => response.text()).then((text) => {
    // const result = text.match(/<h3 class="latest-stories__item-headline">(.+)<\/h3>/g)
    // const result = text.match(/<a href="\/(.+)<\/a>/g)
    const result = text.match(/<li class="latest-stories__item">(.|\n)*?<\/li>/g)

    for(let i = 0; i < result.length; i++){
        elem.innerHTML += result[i]
    }

    const litags = document.getElementsByTagName('a')
    const h3tags = document.getElementsByTagName('h3')
    for(let i = 0; i < h3tags.length; i++){
        let links = h3tags[i].innerHTML
        new_link['text'] = links

        for(let j = 0; j < litags.length; j++){
            if(i == j){
                let link = litags[j].href
                let new_one = 'https://time.com/' + link.slice(10,)
                new_link['link'] = new_one
                new_list.push(new_link)
            
                new_link = {}
            } 
        }
       
        elem.style.display = "none"
        
    
    }
    str = JSON.stringify(new_list);
    op.innerHTML = str
    console.log(new_list)
 
});

}






