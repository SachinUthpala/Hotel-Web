/*code for page animations */

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entrie) => {
        console.log(entrie)
        if(entrie.isIntersecting){
            entrie.target.classList.add('showx');
        }else{
            entrie.target.classList.remove('showx');
        }
    });
})

const hiddenElementx = document.querySelectorAll('.hiddenx');
hiddenElementx.forEach((el) =>observer.observe(el))

/*end of the animation code */

const observery = new IntersectionObserver((entries) => {
    entries.forEach((entrie) => {
        console.log(entrie)
        if(entrie.isIntersecting){
            entrie.target.classList.add('showy');
        }else{
            entrie.target.classList.remove('showy');
        }
    });
})

const hiddenElementy = document.querySelectorAll('.hiddeny');
hiddenElementy.forEach((el) =>observery.observe(el))


/*end of the animation code */

/* for ounter object */
const counts = document.querySelectorAll('.count');
const speed = 90;

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        (rect.top <= window.innerHeight || rect.bottom <= window.innerHeight) &&
        (rect.top >= 0 || rect.bottom >= 0)
    );
}

function updateCounter(counter) {
    const target = Number(counter.getAttribute('data-target'));
    const count = Number(counter.innerText);
    const inc = target / speed;

    if (count < target) {
        counter.innerText = Math.floor(inc + count);
        setTimeout(() => updateCounter(counter), 1);
    } else {
        counter.innerText = target;
    }
}

function handleScroll() {
    counts.forEach((counter) => {
        if (isInViewport(counter) && !counter.hasAttribute('data-scroll-triggered')) {
            counter.setAttribute('data-scroll-triggered', 'true');
            updateCounter(counter);
        }
    });
}

window.addEventListener('scroll', handleScroll);
