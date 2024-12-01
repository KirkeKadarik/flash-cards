const term = document.querySelector('.term');
const definition = document.querySelector('.definition');
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');
const addButton = document.querySelector('.add');
const newTermInput = document.getElementById('new-term');
const newDefinitionInput = document.getElementById('new-definition');

let words = { 
    Hello: "こんにちは",
    Goodbye: "さよなら",
    "Thank you": "ありがとう",
};

let data = Object.entries(words);

function getRandomTerm() {
   
    const randomEntry = data[Math.floor(Math.random() * data.length)];
    const randomTerm = randomEntry[0]; 
    const randomDefinition = randomEntry[1]; 

   
    term.innerHTML = `<h3>${randomTerm}</h3>`;
   
    definition.innerHTML = `<h3>${randomDefinition}</h3>`;
    definition.style.display = 'none'; 
}


checkButton.addEventListener('click', function () {
    definition.style.display = 'block'; 
});


nextButton.addEventListener('click', function () {
    getRandomTerm(); 
});


addButton.addEventListener('click', function () {
    const newTerm = newTermInput.value.trim();
    const newDefinition = newDefinitionInput.value.trim();

    if (newTerm && newDefinition) {
        
        words[newTerm] = newDefinition;

        data = Object.entries(words);

        newTermInput.value = '';
        newDefinitionInput.value = '';

        alert(`Added new word: ${newTerm}`);
    } else {
        alert('Please enter both a term and a definition.');
    }
});

getRandomTerm();


