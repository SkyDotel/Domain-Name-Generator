let pageName=[];

function pageNameGenerator(){
    let pronoun = ['the','our'];
    let adj = ['great', 'big' ];
    let noun = ['jogger','racoon'];
    let domainList = ['.com', '.net', '.gov']

    //loops for getting each word from arrays into combination
    for(let i = 0; i < pronoun.length; i++){
        let firstWord = pronoun[i];
        for(let j = 0; j < adj.length; j++){
            let secondWord = adj[j];
            for(let k = 0; k < noun.length; k++){
                let thirdWord = noun[k];
                for(let l = 0;l <domainList.length; l++){
                    let fourthWord = domainList[l];
                    document.getElementById("site").innerHTML += firstWord + secondWord + thirdWord + fourthWord +"<br>";
                }             
            }
        }   
    }
}

//run code
pageNameGenerator();