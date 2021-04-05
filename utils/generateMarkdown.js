const generatePage = (username, email, title, link, describtion, installation, usage, contribute, tests, license)  => {
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