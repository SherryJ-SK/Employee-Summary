// generate manager div append to html
const fs = require("fs");

function managerDiv(data) {
    const newDiv =
        `<div class="col-md-4 pb-3">
        <div class="card">
            <div class="card-header" id="manager">
                ${data.name}
                <br>
                <i class="fas fa-user-cog"></i>Manager
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${data.id}</li>
                    <li class="list-group-item">Email: <a href=${data.email}>${data.email}</a></li>
                    <li class="list-group-item">Office Number: ${data.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>`;
    fs.appendFile('../../team.html', newDiv + `\n`, (err) => {
        if (err) {
            return err;
        }
    });
};

// generate engineer div append to html
function engineerDiv(data) {
    const newDiv =
        `<div class="col-md-4 pb-3">
            <div class="card">
                <div class="card-header" id="engineer">
                    ${data.name}
                    <br>
                    <i class="fab fa-github-alt"></i>Engineer
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${data.id}</li>
                        <li class="list-group-item">Email: <a href=${data.email}>${data.email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${data.github}">${data.github}</a></li>
                    </ul>
                </div>
            </div>
        </div>`
    fs.appendFile('../../team.html', newDiv + `\n`, (err) => {
        if (err) {
            return err;
        }
    });
};

// generate intern div append to html
function internDiv(data) {
    const newDiv =
        `<div class="col-md-4 pb-3">
            <div class="card">
                <div class="card-header" id="intern">
                    ${data.name}
                    <br>
                    <i class="fas fa-book-reader"></i>Intern
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${data.id}</li>
                        <li class="list-group-item">Email: <a href=${data.email}>${data.email}</a></li>
                        <li class="list-group-item">School: ${data.school}</li>
                    </ul>
                </div>
            </div>
        </div>`
    fs.appendFile('../../team.html', newDiv + `\n`, (err) => {
        if (err) {
            return err;
        }
    });

};

// create html file with body
function initialHtml() {
    const body =
        `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <!-- <link rel="stylesheet" href="./style.css" type="text/css"> -->
        <title>Employee</title>
        <style>
            .title {
                background-color: #468a9c;
                color: azure;
                height: 8rem;
                padding-top: 2rem;
            }
    
            .card-header {
                background-color: #edc600;
                font-size: 1.3rem;
            }
            i {
                margin-right: 0.5rem;
            }
        </style>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    
    <body>
        <h1 class="title text-center">
            My team
        </h1>
        <div class="container">
            <div class="row">
    `

    fs.writeFile("../../team.html", body, function (err) {
        if (err) {
            return console.log(err);
        }
        // console.log("...");
    })
}

// generate the end part of html
function endDiv() {
    const newDiv =
        `</div>
        </div>
    </body>
    </html>`
    fs.appendFile('../.../team.html', newDiv + `\n`, (err) => {
        if (err) {
            return err;
        }
    });
};

module.exports = {
    managerDiv: managerDiv,
    engineerDiv: engineerDiv,
    internDiv: internDiv,
    initialHtml: initialHtml,
    endDiv: endDiv
};
