const generateLicense = (license) => {
    // const list =  ['Apache', 'BSD', 'Eclipse', 'GNU', 'IBM', 'MIT', 'Mozilla']
// for (let index = 0; index < list.length; index++) {
//   const license = list[index];
  if (license === "BSD"){
  const message = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
  console.log(license)
  // console.log(message)
  } else if (license === "BSD") {
    return
    message = "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg"
    console.log(license)
  } else if (license === "Eclipse") {
    return
    message = "https://img.shields.io/badge/License-EPL%201.0-red.svg"
    console.log(message)
  } else if (license === "GNU") {
    message = "https://img.shields.io/badge/License-GPL%20v3-blue.svg"
    console.log(message)
  } else if (license === "IBM") {
    message = "https://img.shields.io/badge/License-IPL%201.0-blue.svg"
    console.log(message)
  } else if (license === "MIT") {
    message = "https://img.shields.io/badge/License-MIT-yellow.svg"
    console.log(message)
  } else if (license === "Mozilla") {
    message = "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg"
    console.log(message)
  }
}
generateLicense("BSD")