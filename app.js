const profileDataArgs = proccess.argv.slice(2, proccess.argv.length);
console.log(profileDataArgs);
const printProfileData = (profileDataArr) => {
  console.log(profileDataArr);
};
printProfileData(profileDataArgs);
// Notice the lack of parantheses around the 'profileDataArr' parmeter?
const printProfileData = profileDataArr = > {
  for (let i = 0; i < profileDataArr.length; i++) {
    console.log(profileDataArr[i];
                }
};
