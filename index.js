/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {type: 'input', name:"Website", message: "Enter the website"}
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    var answerUrl = answers.Website;
    console.log("Answer = "+ answerUrl);
    var qr_link = qr.image(answerUrl);
    qr_link.pipe(fs.createWriteStream('websiteQR.png'));
    fs.writeFile("answer.txt",answers.Website,(err)=>{
        if(err) throw err;
        console.log("Saved");
    });
    })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

