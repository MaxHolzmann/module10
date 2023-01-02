import inquirer from 'inquirer';
// const fs = require('fs');

import Employee from './classes/Employee.js';
import Manager from './classes/Manager.js';
import Engineer from './classes/Engineer.js';
import Intern from './classes/Intern.js';


/* 
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
*/


const writeToFile = (fileName, data) => {
    fs.writeFile(`${fileName}.md`, `${data}`, (err) => {
      if(err) throw err;
      console.log('File "' + `${fileName}` +'" Created!')
    })
  }

  const defaultQuestions = [{
    name: 'manager',
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
        name: "add",
        message: "Add more team members?",
        type: "list",
        choices: ["Add More", "Finish Team"]
     }]

    let userAnswersPeople;
    async function defaultPrompt () { 
            let prompt = await inquirer.prompt(addPeople)
            .then(answers => {
                checkAnswer(answers)
             })
    }   

   async function checkAnswer (answers) {
        let answer;
        if(answers.person === "Engineer") {
            console.log('Engineer')
           }
    
           if(answers.person === "Intern") {
            let internPrompt = inquirer.prompt(internQuestions)
            .then(answers => {
               if(answers.add === "Add More") {
                console.log('adding more')
                defaultPrompt();
               }
            })  
           }
    
           if(answers.person === "Finish Team") {
            console.log('Finish Team')
           }
    }

  async function init  ()  {
    let userAnswers;
    let managerPrompt = await inquirer.prompt(defaultQuestions)
           .then(answers => {
            userAnswers = answers;
           })
        //   writeToFile("README", mark.generateMarkdown(userAnswers));

       defaultPrompt();
    
       
    }
        

init();



// let me = new Employee('max', '74952949', 'max@holzmann.io');
// me.getEmail();

// let newMan = new Manager('hey', '634343', "email haha", "officen umber")
// newMan.getName();
// newMan.getId();