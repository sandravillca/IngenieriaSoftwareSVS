import app from './app.js'
import {sequelize} from './database/database.js' 

//import './models/Medic.js'

async function main(){
    try{
        await sequelize.sync({force: false});
        app.listen(4000);     
        console.log("Server is listening on port", 4000);
    } catch (error){
        console.error("Unable to connect to the database:", error);
    }
    
}

main();


