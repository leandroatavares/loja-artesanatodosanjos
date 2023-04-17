const { writeFile } = require('fs');
const { argv } = require('yargs');

// read environment variables from .env file
require('dotenv').config();

// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';

const targetPath = isProduction
  ? `./src/environments/environment.prod.ts`
  : `./src/environments/environment.ts`;

// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   firebase: {
     projectId: 'loja-artesanatodosanjos',
     appId: '${process.env['APP_ID']}',
     databaseURL: '${process.env['DATABASE_URL']}',
     storageBucket: 'loja-artesanatodosanjos.appspot.com',
     apiKey: '${process.env['API_KEY']}',
     authDomain: 'loja-artesanatodosanjos.firebaseapp.com',
     messagingSenderId: '${process.env['MESSAGING_SENDER_ID']}',
     measurementId: '${process.env['MEASUREMENT_ID']}',
   }
};
`;

// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err: any) {
  if (err) {
    console.log(err);
  }

  console.log(`Wrote variables to ${targetPath}`);
});
