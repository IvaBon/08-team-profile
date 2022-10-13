const inquirer=require('inquirer');
const fs=require('fs');
const Manager=require('./lib/manager');
const Engineer=require('./lib/engineer');
const Intern=require('./lib/intern');
const generaterFile=require('./src/generateFile');



const members=()=>{
   inquirer
    .prompt([
        {
            type:'input',
            name:'name',
            message:'Enter team member name',
        },
        {
            type:'input',
            name:'id',
            message:'Enter team member id',
        },
        {
            type:'input',
            name:'email',
            message:'Enter team member email',
        },
        {
            type:'list',
            name:'role',
            message:'Enter team member role',
            choices:['Manager','Engineer','Intern'],
        },
        
    ])
    .then ((data)=>{
        if (data.role==='Manager'){
            
            
             inquirer.prompt([
                {
                    type:'input',
                    name:'officeNumber',
                    message:'Enter manager office number',
                },
                
            ])
           
            .then((managerInfo)=>{
                anotherMember();
            })
        }
        if(data.role==='Engineer'){
            inquirer.prompt([
                {
                    type:'input',
                    name:'githubUser',
                    message:'Enter engineer github username',
                },
                
            ]).then((engineerInfo)=>{
                anotherMember();
            })
        }
        if(data.role==='Intern'){
            inquirer.prompt([
                {
                    type:'input',
                    name:'school',
                    message:'Enter intern school',
                },
            
            ]).then((internInfo)=>{
                anotherMember();
                fs.writeFile('index.html', generaterFile(),(err)=>
                    err ? console.log(err) : console.log('Generating Team')
                )
            })
        }
        
    })
  
}


const anotherMember=()=>{
    inquirer.prompt([
        {
            type:'confirm',
            name:'addMember',
            message:'Do you want to add another member?',
        }
    ]).then((data)=>{
        if(data.addMember===true){
            members();
        }
    })
}



members();