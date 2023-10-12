const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'characters',
        message: 'Please choose 3 characters for your logo.'
    }
]