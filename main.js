// const container = document.getElementById("text");
// console.log(container);

const moment = require('moment');
const simpleGit = require('simple-git')

const date = moment().subtract(7,'d').format();

simpleGit().add(['./main.js']).commit("coded from forked repo of fcc",{'--date': date}).push();