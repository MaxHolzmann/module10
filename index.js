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

               }
            })  
           }
    
           if(answers.person === "Finish Team") {
            displayNames(allEmployees[0])
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
        //   writeToFile("README", mark.generateMarkdown(userAnswers));

       await defaultPrompt();

        
       
      
       
        
       
    }
        

init();



// let me = new Employee('max', '74952949', 'max@holzmann.io');
// me.getEmail();

// let newMan = new Manager('hey', '634343', "email haha", "officen umber")
// newMan.getName();
// newMan.getId();