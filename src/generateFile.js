const generateTeam=team=>{

    const generateManager=manager=>{
        return `
    <div class='card employee-card'>
        <div class='card-header'>
            <h2 class='card-title'>${manager.getName()}</h2>
            <h3 class='card-title'><i class='fas fa-mug-hot mr-2'></i>${manager.getRole()}</h3>
        </div>
        <div class='card-body'>
            <ul class='list-group'>
                <li class='list-group-item'>ID: ${manager.getId()}</li>
                <li class='list-group-item'>Email: <a href='mailto:${manager.getEmail()}'></li>
                <li class='list-group-item'>ID: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `
    };

    const generateEngineer=engineer=>{
        return `
    <div class='card employee-card'>
        <div class='card-header'>
            <h2 class='card-title'>${engineer.getName()}</h2>
            <h3 class='card-title'><i class='fas fa-mug-hot mr-2'></i>${engineer.getRole()}</h3>
        </div>
        <div class='card-body'>
            <ul class='list-group'>
                <li class='list-group-item'>ID: ${engineer.getId()}</li>
                <li class='list-group-item'>Email: <a href='mailto:${engineer.getEmail()}'></li>
                <li class='list-group-item'>ID: ${engineer.getGithub()}</li>
            </ul>
        </div>
    </div>
    `
    };

    const generateIntern=intern=>{
        return `
        <div class='card employee-card'>
            <div class='card-header'>
                <h2 class='card-title'>${intern.getName()}</h2>
                <h3 class='card-title'><i class='fas fa-mug-hot mr-2'></i>${intern.getRole()}</h3>
            </div>
            <div class='card-body'>
                <ul class='list-group'>
                    <li class='list-group-item'>ID: ${intern.getId()}</li>
                    <li class='list-group-item'>Email: <a href='mailto:${intern.getEmail()}'></li>
                    <li class='list-group-item'>ID: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `
    };
}


const makePage=generateHTML=>{
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <title>Team</title>
    </head>
    <body>
        <header>
            <h1>Team</h1>
        </header>
        <section>
            ${generateTeam}
        </section>



        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    </body>
    </html>
    `
}