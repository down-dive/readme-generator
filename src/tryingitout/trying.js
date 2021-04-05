const generateLicense = (license) => {
    // const list =  ['Apache', 'BSD', 'Eclipse', 'GNU', 'IBM', 'MIT', 'Mozilla']
// for (let index = 0; index < list.length; index++) {
//   const license = list[index];
  if (license === "Apache"){
  return message = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
  } else if (license === "BSD") {
    return message = "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg"
  } else if (license === "Eclipse") {
    return message = "https://img.shields.io/badge/License-EPL%201.0-red.svg"
  } else if (license === "GNU") {
     return  message = "https://img.shields.io/badge/License-GPL%20v3-blue.svg"
  } else if (license === "IBM") {
    return message = "https://img.shields.io/badge/License-IPL%201.0-blue.svg"
  } else if (license === "MIT") {
    return"https://img.shields.io/badge/License-MIT-yellow.svg"
    console.log(message)
  } else if (license === "Mozilla") {
    return message = "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg"
  }
}
// generateLicense("BSD")

module.exports = generateLicense