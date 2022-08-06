const fs = require('fs');
const path = require('path');

const cardTemplatePath = path.join(__dirname, 'templates', 'card.html');
const mainTemplatePath = path.join(__dirname, 'templates', 'main.html');




function createCard(employee){

    //read card.html template
    const cardTemplate = fs.readFileSync(cardTemplatePath, 'utf-8');
    //replace placeholders with actual data
    let replaced = cardTemplate.replace('{{name}}', employee.getName())
    .replace('{{id}}', employee.getId())
    .replace('{{role}}', employee.getRole())
    .replace('{{email}}', employee.getEmail())

    if(employee.getRole() === 'Manager'){
        replaced = replaced.replace('{{attr_key}}', 'Office Number')
        .replace('{{attr_value}}', employee.getOfficeNumber())
    }
    if(employee.getRole() === 'Engineer'){
        replaced = replaced.replace('{{attr_key}}', 'Github')
        .replace('{{attr_value}}', `https://github.com/${employee.getGithub}`)
    }
    if(employee.getRole() === 'Intern'){
        replaced = replaced.replace('{{attr_key}}', 'School')
        .replace('{{attr_value}}', employee.getSchool())
    }

    return replaced;
}


function generateHtml(employees){

    const mainTemplate = fs.readFileSync(mainTemplatePath, 'utf-8');
    //loop through each employee
    //generate card for each employee
    const cards = employees.map(createCard).join('')



    //once done
    //join cards into 1 big string

    //replace the {{body}} with these carsd
    return mainTemplate.replace('{{body}}', cards);


}


module.exports = generateHtml;