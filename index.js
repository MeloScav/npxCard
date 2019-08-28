#!/usr/bin/env node
const chalk = require('chalk');
const boxen = require('boxen');
const gradient = require('gradient-string');
const terminalLink = require('terminal-link');
const CFonts = require('cfonts');

CFonts.say('Visit card', {
    font: 'chrome',           
	align: 'center',              
	colors: ['candy'],        
	background: 'transparent',  
	letterSpacing: 1,    
	lineHeight: 2,     
	space: true,         
	maxLength: '0',      
});

const options = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    float: "center",
    borderColor: "#DE76D7",
    backgroundColor: "black"
};


const data = {
    name: chalk.whiteBright.bold('                  Méloé Scavezzoni'),
    work: chalk.blue('Web junior developer'),
    npm: chalk.gray('https://www.npmjs.com/') + chalk.greenBright('~meloscav'),
    github: chalk.gray('https://github.com/') + chalk.cyanBright('MeloScav'),
    linkedin: chalk.gray('https://www.linkedin.com/in/') + chalk.magentaBright('méloé-scavezzoni'),
    npx: chalk.white('npx @meloe/npxcard'),

    labelwork: gradient.atlas('Work :'),
    labelnpm: gradient.teen('NPM :'),
    labelGitHub: gradient.vice('GitHub :'),
    labelLinkedIn: gradient.summer('LinkedIn :'),
    labelCard: gradient.fruit('Card :')
};


const newline = '\n'
const heading = `${data.name}`
const working = `${data.labelwork} ${data.work}`
const npm = `${data.labelnpm} ${data.npm}`
const githubing = `${data.labelGitHub} ${data.github}`
const linkedining = `${data.labelLinkedIn} ${data.linkedin}`
const carding = `${data.labelCard} ${data.npx}`


const output = heading + newline + newline + working + newline + npm + newline + githubing + newline + linkedining + newline + newline + newline + carding

console.log(chalk.green(boxen(output, options)));

