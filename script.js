
let ul = document.querySelector('ul');
let div = document.querySelector('div');

let i = 0;
let j = 1;

function numDays() {
    let date = new Date();
    let now = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let day = now.getDate();

    return day;
}

function createLi(amount) {
    ul.innerHTML = '';

    let date = new Date();
    let nowDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let day = nowDate.getDate();
    let month = new Date(date.getFullYear(), date.getMonth() + i);
    let year = new Date(date.getFullYear() + i, date.getMonth());

    for (let i = 1; i <= amount; i++) {
        let li = document.createElement('li')
        li.innerHTML = i;

        if (i == day && month.getMonth() == date.getMonth() && year.getFullYear() == date.getFullYear()) {
            li.style.background = '#4ECFE6';
            li.style.color = 'white';
        } 

        ul.appendChild(li);
    }
} 

createLi(numDays());

function getLinkNext() {
    let link = document.createElement('a');
    link.href = '';
    link.innerHTML = 'NEXT';
    link.classList.add('next');
    link.addEventListener('click', function(event) {
        event.preventDefault();

        function numDays() {
            let date = new Date();
            let now = new Date(date.getFullYear(), date.getMonth() + 1 + ++i, 0);
            let day = now.getDate();

            return day;
        }

        createLi(numDays());

        function getDate() {
            let now = new Date();
            let date = new Date(now.getFullYear(), now.getMonth() + i);
            let year = date.getFullYear();
            let month = date.getMonth();

            let arrMonth = ['Январь', 'Февраль', 'Март', 'Апрель',
                            'Май', 'Июнь', 'Июль', 'Август', 
                            'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

            return arrMonth[month] + ' ' + year;
        }

        createTitle(getDate());
    });

    return link;
}

div.prepend(getLinkNext());

function getLinkBack() {
    let link = document.createElement('a')
    link.href = '';
    link.innerHTML = 'BACK';
    link.classList.add('back');
    link.addEventListener('click', function(event) {
        event.preventDefault();

        function numDays() {
            let date = new Date();
            let now = new Date(date.getFullYear(), date.getMonth() + 1 + --i, 0);
            let day = now.getDate();

            return day;
        }

        createLi(numDays());

        function getDate() {
            let now = new Date();
            let date = new Date(now.getFullYear(), now.getMonth() + i);
            let year = date.getFullYear();
            let month = date.getMonth();

            let arrMonth = ['Январь', 'Февраль', 'Март', 'Апрель',
                            'Май', 'Июнь', 'Июль', 'Август', 
                            'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

            return arrMonth[month] + ' ' + year;
        }

        createTitle(getDate());

    });

    return link;
}

div.prepend(getLinkBack());

function getDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();

    let arrMonth = ['Январь', 'Февраль', 'Март', 'Апрель',
                     'Май', 'Июнь', 'Июль', 'Август', 
                     'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    return arrMonth[month] + ' ' + year;
}

function createTitle(date) {
    let p = document.createElement('p'); 
    let pIn = document.querySelector('p');

    if (div.contains(pIn)) {
        div.removeChild(pIn);
    } 

    p.innerHTML = date;

    div.prepend(p);
}

createTitle(getDate());