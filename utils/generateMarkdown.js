// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}



const generatePage = (username, email, title, link, describtion, installation, usage, contribute, tests, license) => {
  return `
  # ${title}

  ## Describtion

  ${describtion}

  ## Table of Contents

  * [Installation](#installation) 
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Testing](#testing)
  * [Deployed Link](#link)
  * [Qurestions](#questions)
  * [License](#license)

  ## Installatioln

  ${installation}

  ## Usage

  ${usage}

  ## Contibutions

  ${contribute}


  ## Testing
  ${tests}

  ## Deployed link

  ${link}

  ## Questions

  Github link: https://github.com/${username}
  Email: ${email}

  ## License

  License that was used for this project: ${license}

  `
};

module.exports = generatePage;