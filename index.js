const inquirer=require('inquirer');
const fs=require('fs');
const Manager=require('./lib/manager');
const Engineer=require('./lib/engineer');
const Intern=require('./lib/intern');
const generaterFile=require('./src/generateFile');



function members(){
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
                {
                    type:'confirm',
                    name:'again',
                    message:'Do you want to add another member',
                    validate: again => {
                        if(data.again==='Yes'){
                            members();
                        }   
                          
                        
                    }

                    
                    
                    
                },
            ]);
            
        }
        if(data.role==='Engineer'){
            inquirer.prompt([
                {
                    type:'input',
                    name:'githubUser',
                    message:'Enter engineer github username',
                },
                {
                    type:'confirm',
                    name:'again',
                    message:'Do you want to add another member',
                },
            ]);
        }
        if(data.role==='Intern'){
            inquirer.prompt([
                {
                    type:'input',
                    name:'school',
                    message:'Enter intern school',
                },
                {
                    type:'confirm',
                    name:'again',
                    message:'Do you want to add another member',
                },
            ]);
        }
        
    })
//     .then(()=>{
//         inquirer.prompt([
//             {
//                 type:'confirm',
//                 name:'again',
//                 message:'Do you want to add another member',
                
//             }
//         ])
//     })
  
}





members();