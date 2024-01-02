
var navtags = document.querySelectorAll('.sections');

for (var i = 1; i < navtags.length; i++) {
    navtags[i].addEventListener('click', function (event) {
        event.preventDefault();

        var target = this.textContent.trim().toLowerCase();
        var targetsection = document.getElementById(target);

        if (targetsection == null) {
            i++;
        }

        var interval = setInterval(function () {
            var coordinates = targetsection.getBoundingClientRect();
            if (coordinates.top <= 0) {
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 50);
        }, 20);

    });
}

//handle scroll event on window
//check that skills section is visible or not
//initial width of colored skill divs should be zero width
//inner div of skills
//start animation -> increase skill width from 0 to skill level at regular intervals
//store skills level-->data attribute to be added to every div
var animationdone = false;
var progressbars = document.querySelectorAll('.skill-progress > div');
var container = document.getElementById('skills-container')



function initialisebars() {
    for (let bar of progressbars) {
        bar.style.width = 0 + '%';
    }
}
initialisebars();

function fillbars() {

    for (let bar of progressbars) {
        let targetwidth = bar.getAttribute('data-value');
        let currwidth = 0;

        let interval = setInterval(function () {

            if (currwidth > targetwidth) {
                clearInterval(interval);
                return;
            }
            currwidth++;
            bar.style.width = currwidth + '%';

        }, 5);

    }

}


function checkScroll() {
    var coordinate = container.getBoundingClientRect();
    if (!animationdone && coordinate.top <= window.innerHeight) {

        animationdone = true;

        fillbars();
    }
    else if (coordinate.top > window.innerHeight) {
        animationdone = false;
        initialisebars();
    }

}

window.addEventListener('scroll', function () {
    checkScroll();

});

function sendEmail() {

    var params = {
        from_name: document.getElementById('name').value,
        email_id: document.getElementById('email').value,
        message: document.getElementById('message').value
    }

    emailjs.send("service_zjvbkqm", "template_xszks9q", params).then(function (res) {
        alert("Success!" + res.status)
    })
}


function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

window.onload = closeNav();