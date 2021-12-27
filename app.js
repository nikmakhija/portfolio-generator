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
const generatePage = () => Name: Nikhil, Github: nikmakhija';
console.log(generatePage('Nikhil','nikmakhija'));
cost generatePage = (userName, githubName) => {
  return '
  Name: ${nikmakhija}
  GitHub: ${nikmakhija}
  ';
};
