$(document).ready(function () {

    const portfolio = document.querySelector("#portfolio");
    const project = document.querySelector("#projects");
    const technologies = document.querySelector("#technologies");
    const contacts = document.querySelector("#contacts");
    const buttons = document.getElementsByClassName("color");
    // const photo =document.querySelector("#photo");


    $(buttons).click(function buttonClick() {
        event.preventDefault();

        const userClick = event.target.id;
        console.log(userClick);
        
        if (userClick == "firsttab") {
            $("#firsttab").addClass("active");
            $("#secondtab").removeClass("active");
            $("#thirdtab").removeClass("active");
            $("#fourthtab").removeClass("active");

            portfolio.style.display = "block";
            // photo.style.display = "block";
            project.style.display = "none";
            technologies.style.display = "none";
            contacts.style.display = "none";
        } else if (userClick == "secondtab") {
            $("#firsttab").removeClass("active");
            $("#secondtab").addClass("active");
            $("#thirdtab").removeClass("active");
            $("#fourthtab").removeClass("active");

            portfolio.style.display = "none";
            // photo.style.display = "none";
            project.style.display = "block";
            technologies.style.display = "none";
            contacts.style.display = "none";
        } else if (userClick == "thirdtab") {
            $("#firsttab").removeClass("active");
            $("#secondtab").removeClass("active");
            $("#thirdtab").addClass("active");
            $("#fourthtab").removeClass("active");

            portfolio.style.display = "none";
            // photo.style.display = "none";
            project.style.display = "none";
            technologies.style.display = "block";
            contacts.style.display = "none";
        } else if (userClick == "fourthtab") {
            $("#firsttab").removeClass("active");
            $("#secondtab").removeClass("active");
            $("#thirdtab").removeClass("active");
            $("#fourthtab").addClass("active");

            portfolio.style.display = "none";
            // photo.style.display = "none";
            project.style.display = "none";
            technologies.style.display = "none";
            contacts.style.display = "block";
        }

    });





})