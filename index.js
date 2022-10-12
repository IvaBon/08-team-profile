const inquirer=require('inquirer');
const fs=require('fs');
const Manager=require('./lib/manager');
const Engineer=require('./lib/engineer');
const Intern=require('./lib/intern');
const generaterFile=require('./src/generateFile');

inquirer
    .prompt([
        {
            type:'list',
            name:'addWorker',
            message:'What type of employee do you want to add?',
            choices:['Manager','Engineer','Intern','Done'],
        },
    ])
    .then((data)=>{
        switch(data.addWorker){
            case 'Manager':
                
        }
    });


