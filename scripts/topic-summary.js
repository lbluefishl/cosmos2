let links = document.querySelectorAll('.link-to-question'); 
let topic = document.querySelector('body').id;
let clearButton = document.querySelector('button');

clearButton.addEventListener('click', clearProgress)

function colorLinks() {
    links.forEach(function (element) {
        let linkid = topic + '-' + element.innerHTML
        if (localStorage.getItem(linkid) == 1) {
            element.style.background = 'rgb(181,239,238)';
        } else if (localStorage.getItem(linkid) == 0) {
            element.style.background = 'rgb(255,213,128)';
        } else {
            element.style.background = 'white';
        };
    })
}

function clearProgress() {
    for (i=1; i<links.length+1; i++) {
        localStorage.removeItem(`${topic}-${i}`);
        colorLinks();
    }
}

colorLinks();

