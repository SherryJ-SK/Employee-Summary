// generate manager div append to html
function managerDiv() {
    const row = document.getElementsByClassName("row");
    const newDiv =
        `<div class="col-md-4">
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
    </div>`
    row.appendChild(newDiv);
}

// generate engineer div append to html
function engineerDiv() {
    const row = document.getElementsByClassName("row");
    const newDiv =
        `<div class="col-md-4">
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
                        <li class="list-group-item">GitHub: <a href="https://api.github.com/users/${data.github}">${data.github}</a></li>
                    </ul>
                </div>
            </div>
        </div>`
    row.appendChild(newDiv);
}

// generate intern div append to html
function internDiv() {
    const row = document.getElementsByClassName("row");
    const newDiv =
        `<div class="col-md-4">
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
    row.appendChild(newDiv);
}

module.exports = {
    managerDiv: managerDiv,
    engineerDiv: engineerDiv,
    internDiv: internDiv
};
