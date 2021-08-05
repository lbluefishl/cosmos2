let topics = document.querySelectorAll('div.progress');

function getProgress() {
    topics.forEach(function (element) {
        let sum = 0
        let max = +element.getAttribute('data-questions')
        for (i = 1; i <= max; i++) {
            if (localStorage.getItem(`linear-equations-${i}`) == 1) {
                sum += 1*(100/max);
            }
        }
        let progress = 1;
        let completion = setInterval(setProgress, 20)
        function setProgress() {
            if (progress >= sum) {
                clearInterval(completion);
            } else {
                progress++;
                element.style.width = progress + "%";
                console.log('test')
                
            }
        }
    })
}

getProgress();
