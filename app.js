const profileDataArgs = process.argv.slice(2, proccess.argv.length);
const name = profileDataArgs[0];
const name = profileDataArgs[1];
const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach((profileItem) => {
    console.log(profileItem)
  });
};
const generatePage = (name, github) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
};
fs.writefile('index.html', generatePage(name, github), error => {
  if (err) throw err;
  console.log('Portfolio complete! Check out index.html to see the output!')
cost generatePage = (userName, githubName) => {
  return '
  Name: ${nikmakhija}
  GitHub: ${nikmakhija}
  ';
};
