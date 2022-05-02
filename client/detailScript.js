const csv = require('csv-parser');
const fs = require('fs');
const results = [];

// used for temporary storage of data
const data = [];

// object of the team details
const Team = 
{
	"TA" : [],
	"MAIN" : [],
	"CS" : [],
	"RAS" : [],
	"PES" : [],
	"WIE" : [],
	"WEB_DEV_COMMITTEE" : [],
	"PUBLICITY_COMMITTEE" : [],
	"PROGRAM_COMMITTEE" : [],
	"PROJECT_COMMITTEE" : [],
	"EDITORIAL_COMMITTEE" : [],
	"DESIGN_COMMITTEE" : []
}

// form data format case may differ
const form = 
{
    "name" : "",
    "email" : "",
    "stream" : "",
    "part of" : "",
    "position" : "",
    "linkedin" : "",
    "instagram" : "",
    "resume" : "",
    "image" : ""
}

// read from the csvfile and write into ExeComDetails file
fs.createReadStream('./CSV_FILENAME.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    for(let i = 0; i < results.length; i++){
      let res = results[i];
      const part = res["partOf"];
      Team[part].push(res);
    };
    fs.writeFileSync("./src/pages/ExeCom/ExeComDetails.json", JSON.stringify(Team), (err) => {
      if(err){
        throw err;
      } else {
        console.log("Results saved successfully");
      }
    })
  });
