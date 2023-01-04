import inquirer from 'inquirer';
import fs from 'fs';

import Employee from './classes/Employee.js';
import Manager from './classes/Manager.js';
import Engineer from './classes/Engineer.js';
import Intern from './classes/Intern.js';


/* 
TODO:

Format and generate an HTML File with the given names using JS.
Style said HTML with CSS.
Clean code, make seperate files for big js functions.

*/

//format html here

const formatDiv = (data) => {
    let divString = "";
    for(let i = 0; i < allEmployees.length; i++) {
        divString+= "\n<div>\n" + data[i].getName() + "\n</div>\n"
        divString+= "\n<div>\n" + data[i].getRole() + "\n</div>\n"

        //division in css
        divString+= "\n<div>" + data[i].getId() + "\n</div>"
        divString+= "\n<div>" + data[i].getEmail() + "\n</div>"

        //unique info based on role
        if(data[i].getRole() === "Manager") {
            divString+= "\n<div>" + data[i].getOfficeNumber() + "\n</div>"
        }

        if(data[i].getRole() === "Engineer") {
            divString+= "\n<div>" + data[i].getGithub() + "\n</div>"
        }

        if(data[i].getRole() === "Intern") {
            divString+= "\n<div>" + data[i].getSchool() + "\n</div>"
        }

    }
    return divString;
}

const writeHTML = (fileName, data) => {
    fs.writeFile(`./dist/${fileName}.html`, 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Manager</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>

    <div>My Team</div>

    <div>` +
    
    formatDiv(allEmployees)
    
    + 
    `</div>
    </body>
    </html>`, 

    (err) => {
        if(err) throw err;
      console.log('File "' + `${fileName}` +'" Created!')
    })
  }

const defaultQuestions = [{
    name: 'name',
    message: "What is your team manager's name?",
    type: 'input'
     },{
    name: "id",
    message: "Enter your manager's Employee ID",
    type: "input"
     }, {
    name: "email",
    message: "Enter your manager's email",
    type: "input"
     },{
    name: "office",
    message: "Enter your manager's office number",
    type: "input"
     }];

const addPeople = [{
        name: "person",
        message:"Who would you like to add to your team?",
        type: "list",
        choices: ["Engineer", "Intern", "Finish Team"]
     }]

const internQuestions = [{
        name: "name",
        message: "What is your intern's name?",
        type: "input"
     },{
        name: "school",
        message: "What school is your intern attending?",
        type: "input"
     },{
        name: "id",
        message: "What is your intern's ID?",
        type: "input"
     },{
        name: "email",
        message: "What is your intern's email?",
        type: "input"
     },{
        name: "add",
        message: "Add more team members?",
        type: "list",
        choices: ["Add More", "Finish Team"]
     }]

     const engineerQuestions = [{
        name: "name",
        message: "What is your engineers's name?",
        type: "input"
     },{
        name: "github",
        message: "What is your engineer's Github username?",
        type: "input"
     },{
        name: "id",
        message: "What is your engineers's ID?",
        type: "input"
     },{
        name: "email",
        message: "What is your engineers's email?",
        type: "input"
     },{
        name: "add",
        message: "Add more team members?",
        type: "list",
        choices: ["Add More", "Finish Team"]
     }]

let allEmployees = [];

    let userAnswersPeople;
    async function defaultPrompt () { 
            let prompt = await inquirer.prompt(addPeople)
            .then(answers => {
                checkAnswer(answers)
             })
    }   

    async function displayNames  (array) {
        for(let i = 0; i < array.length; i++) {
            console.log(array[i].getName())
            console.log(array[i].constructor.name)
        }
    }

   async function checkAnswer (answers) {
        if(answers.person === "Engineer") {
            let engineerPrompt = inquirer.prompt(engineerQuestions)
            .then(answers => {

                let newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                allEmployees.push(newEngineer)

               if(answers.add === "Add More") {
                console.log('adding more')
                defaultPrompt();
               } else {

                displayNames(allEmployees)
                writeHTML("index", allEmployees)

               }

            })
           }
    
           if(answers.person === "Intern") {
            let internPrompt = inquirer.prompt(internQuestions)
            .then(answers => {

                let newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
                allEmployees.push(newIntern)

               if(answers.add === "Add More") {
                console.log('adding more')
                defaultPrompt();
               } else {

                displayNames(allEmployees)
                writeHTML("index", allEmployees)

               }
            })  
           }
    
           if(answers.person === "Finish Team") {
            displayNames(allEmployees)
            writeHTML("index", allEmployees)
           }
    }

  
  async function init  ()  {
    let userAnswers;
    let managerPrompt = await inquirer.prompt(defaultQuestions)
           .then(answers => {
            userAnswers = answers;
            let theManager = new Manager(answers.name, answers.id, answers.email, answers.office)
            allEmployees.push(theManager)
           })
       await defaultPrompt();
   
    }
        

init();



// let me = new Employee('max', '74952949', 'max@holzmann.io');
// me.getEmail();

// let newMan = new Manager('hey', '634343', "email haha", "officen umber")
// newMan.getName();
// newMan.getId();