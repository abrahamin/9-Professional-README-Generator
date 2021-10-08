// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";

  switch (license) {
    case 'MIT':
      licenseBadge = "https://img.shields.io/badge/License-MIT-blue.svg";
      break;
    case 'APACHE 2.0':
      licenseBadge = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
      break;
    case 'GPL 3.0':
      licenseBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg";
      break;
    case 'BSD 3':
      licenseBadge = "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";
      break;
    case 'None':
      licenseBadge = "";
      break;
  } return licenseBadge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";

  switch (license) {
    case 'MIT':
      licenseLink = "https://opensource.org/licenses/MIT";
      break;
    case 'APACHE 2.0':
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    case 'GPL 3.0':
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case 'BSD 3':
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case 'None':
      licenseLink = "";
      break;
  } return licenseLink;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";

  switch (license) {
    case 'MIT':
      licenseSection = `[![License: MIT](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
      break;
    case 'APACHE 2.0':
      licenseSection = `[![License: APACHE 2.0](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
      break;
    case 'GPL 3.0':
      licenseSection = `[![License: GPL 3.0](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
      break;
    case 'BSD 3':
      licenseSection = `[![License: BSD 3](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
      break;
    case 'None':
      licenseSection = "";
      break;
  } return licenseSection;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

  \`\`\`
  ${data.dependencies}
  \`\`\`

  ## Usage

  ${data.usage}

  ## License

  This project is licensed under the ${data.license} license.

  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests, run the following command:

  \`\`\`
  ${data.tests}
  \`\`\`

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [https://github.com/${data.username}/](https://github.com/${data.username}/).
`;
}

module.exports = {generateMarkdown};
