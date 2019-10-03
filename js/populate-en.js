function basicInfo() {
    document.getElementById("name").innerHTML = info.short_name
    document.getElementById("full-name").innerHTML = info.name
    document.getElementById("age").innerHTML = info.age
    document.getElementById("course").innerHTML = info.course
    document.getElementById("email").innerHTML = info.email
    document.getElementById("address").innerHTML = info.address
    document.getElementById("updated_at").innerHTML = info.updated_at
}

function whoAmI() {
    let $div = document.getElementById("description");
    info.description.map(text => {
        let $p = document.createElement("p");
        let node = document.createTextNode(text);
        $p.appendChild(node);
        $div.appendChild($p);
    });
}

function capitalize(string) {
    title = "";
    n = 0;
    for (word of string.split("_")) {
        let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
        title += capitalized
        if (n < string.split("_").length) {
            title += " "
        }
        n += 1;
    }
    return title
}

function createSkills() {
    let skills = info.skills;

    function getSkill(key) {
        let component = "";

        x = 0;
        for (let skill of skills[key]) {
            x += 1;
            component += `
                <div class="row">
                    <div class="col-sm-3">${skill.label}</div>
                    <div class="col-sm-9">
                        <div class="progress">
                            ${skill.junior ?
                                `<div class="progress-bar bg-success progress-bar-striped progress-bar-animated" style="width: ${skill.junior}%">
                                    ${key === "language" ? "Basic" : "Junior"}
                                </div>`
                            : ""}
                            ${skill.pleno ?
                                `<div class="progress-bar bg-info progress-bar-striped progress-bar-animated" style="width: ${skill.pleno}%">
                                    ${key === "language" ? "Intermediary" : "Pleno"}
                                </div>`
                            : ""}
                            ${skill.senior ?
                                `<div class="progress-bar bg-primary progress-bar-striped progress-bar-animated" style="width: ${skill.senior}%">
                                    ${key === "language" ? "Advanced" : "Senior"}
                                </div>`
                            : ""}
                        </div>
                    </div>
                </div>
                ${x < skills[key].length ? "<hr />" : ""}
            `;
        }

        return component
    }

    let component = "";
    i = 0;
    keys = Object.keys(skills);
    for (let key in skills) {
        i += 1;
        let $cardHeader = `
            <div class="card">
                <div class="card-header bg-dark text-white">${capitalize(key)}</div>
                <div class="card-body">
                    ${getSkill(key)}
                </div>
            </div>
            ${i < keys.length ? "<br />" : ""}
        `;
        component += $cardHeader
    }

    document.getElementById("skills-cards").innerHTML = component;
}

function createProject() {
    let component = "";

    for (let project of info.projects) {
        component += `
            <div class="card">
                <div class="card-header">
                    <a class="collapsed card-link" data-toggle="collapse" href="#${project.id}" onclick=modificarIcone("${project.id}-icon")>
                        <i class="fa fa-caret-right" id="${project.id}-icon"></i>
                        ${project.title}
                    </a>
                    <span class="card-link float-right">
                        ${project.tecnology}
                    </span>
                </div>
                <div id="${project.id}" class="collapse" data-parent="#accordion">
                    <div class="card-body">
                        <p class="card-text">
                            ${project.description}
                        </p>
                        <a href="${project.link}"
                            target="__blank"
                            class="card-link float-right">
                            <i class="fa fa-github"></i>
                            More Information
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    document.getElementById("projects-card").innerHTML = component;
}

function createExperience() {
    let component = "";

    function getDescription(xp) {
        component = "";

        for (description of xp.description) {
            let $p = `<p class="text-justify">${description}</p>`;
            component += $p;
        }

        return component;
    }

    v = 0;
    for (let xp of info.experience) {
        v += 1;
        component += `
            <div class="row">
                <div class="col-sm-4">
                    <h4>${xp.position}</h4>
                    <span class="small text-secondary">
                        ${xp.company}
                    </span><br />
                    <span class="small text-secondary">${xp.time}</span>
                  </div>
                  <div class="col-sm-8">
                    <p class="text-justify">
                        ${getDescription(xp)}
                    </p>
                </div>
            </div>
            ${v < info.experience.length ? "<hr />" : ""}
        `;
    }

    document.getElementById("experience-card").innerHTML = component;
}

basicInfo();
whoAmI();
createSkills();
createProject();
createExperience();