const links = document.querySelectorAll('.link-to-question'); 
const topic = window.location.pathname.split('/')[2].toLowerCase().replace(/%20/g,'-');
const clearButton = document.querySelector('button');
const topicName1 = document.querySelector('.header')
const topicName2 = document.querySelector('title')

clearButton.addEventListener('click', clearProgress)

function colorLinks() {
    links.forEach(function (element) {
        let linkid = topic + "-" + element.innerHTML
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


function populateTopic() {
    topicName1.innerHTML =  `${window.location.pathname.split('/')[2].replace(/%20/g,' ')}`;
    topicName2.innerHTML =  `${window.location.pathname.split('/')[2].replace(/%20/g,' ')}`;
}

colorLinks();
populateTopic();
