let topics = document.querySelectorAll('div.progress');

function getProgress() {
    topics.forEach(function (element) {
        let sum = 0
        let max = +element.getAttribute('data-questions')
        let id = element.id

        for (i = 1; i <= max; i++) {
           
            if (localStorage.getItem(`${id}-${i}`) == 1) {
                sum += 100/max;             
                }

        }
        if (sum > max) {
            sum = 100;
        } 
        let progress = 1;
        let completion = setInterval(setProgress, 20)
        function setProgress() {
            if (progress >= sum) {
                clearInterval(completion);
            } else {
                progress++;
                element.style.width = progress + "%";                
            }
        }
    })
}

getProgress();
