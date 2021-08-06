// 
const button = document.getElementById('buttonCount');
const copy = document.getElementById("copy");
const copyText = document.createElement("p"); 

//  Copiando o texto escrito e criando paragrafo com ele inserido.
button.addEventListener('click', () => {
    let typedText = document.getElementById("textInput");
    ttv = typedText.value;
    ttv = ttv.toLowerCase(); 
    ttv = ttv.replace(/[^a-z'\s]+/g, ""); 
 

// Contando letras
    const letterCounts = [];
    for (let i = 0; i < ttv.length; i++) {
    let currentLetter = ttv[i];
    if (letterCounts[currentLetter] === undefined) {
        letterCounts[currentLetter] = 1; 
     } else { 
        letterCounts[currentLetter]++; 
     }
 }

 for (let letter in letterCounts) { 
    const span = document.createElement("span"); 
    const textContent = `"${letter}": ${letterCounts[letter]}, `;
    span.innerText = textContent; 
    const letters = document.getElementById("lettersDiv");
    letters.appendChild(span); 
 }

 console.log(letterCounts)

// Contando palavras
    const wordsCounts = [];
    ttvS = ttv.split(" ");  
    for (let i = 0; i<ttvS.length;i++){
        let currentWord = ttvS[i];
        if (wordsCounts[currentWord] === undefined) {
            wordsCounts[currentWord] = 1; 
         } else { 
            wordsCounts[currentWord]++; 
         }
    // console.log(wordsCounts)
    }

    for (let word in wordsCounts) { 
        const span2 = document.createElement("span"); 
        const textContent2 = `"${word}": ${wordsCounts[word]}, `;
        span2.innerText = textContent2; 
        const words = document.getElementById("wordsDiv");
        words.appendChild(span2); 
     }

});
