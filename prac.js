//Button clicked to change background color//

const myButton = document.getElementById('colorBtn')
const text = document.getElementById('text')
const colors = ["I", "love", "you", "so", "much", "I love you so much"];
const color = ["lightblue", "lightgreen", "yellow", "red", "purple", "pink"];

let index = 0;

myButton.addEventListener("click", function() {
    document.body.style.backgroundColor = color[index];
    
    text.textContent = colors[index]
    index = index  + 1;

    if(index >= colors.length){
        index = 0;
    }
}
)




