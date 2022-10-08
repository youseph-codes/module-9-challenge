// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const licenseInput = data.license
  let licenseBadge = ""

  if (licenseInput === "none") {
    return licenseBadge;
  }
  if (licenseInput === "MIT") {
    licenseBadge = "[![License](/)](/)";
    return licenseBadge;
  }
  if (licenseInput === "Apache") {
    licenseBadge = "[![License](/)](/)";
    return licenseBadge;
  }
  if (licenseInput === "BDS 3-Clause") {
    licenseBadge = "[![License](/)](/)";
    return licenseBadge;
  }
  if (licenseInput === "Mozilla") {
    licenseBadge = "[![License](/)](/)";
    return licenseBadge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  const licenseInput = data.license
  
  if (licenseInput === "none") {
    return "" 
  } else {
    return `* [License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
