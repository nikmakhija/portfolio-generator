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
