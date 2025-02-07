import inquirer from 'inquirer';
import colors from 'colors';

inquirer
  .prompt([
    {
      type: 'list',
      message: 'What is your favorite color?',
      name: 'color',
      choices: ['red', 'blue', 'green', 'yellow', 'purple', 'magenta'],
    },

    {
      type: 'list',
      message: 'What is your favorite kind of food?',
      name: 'food',
      choices: ['Italian', 'Chinese', 'American', 'Soul', 'Mexican', 'Indian'],
    },

    {
      type: 'input',
      message: 'What is your favorite color (for confirmation)?',
      name: 'confirm',
    },
  ])
  .then((response) => {
    console.log(colors[response.color](`Your favorite color is ${response.color}!`));
    

    console.log(`Your favorite kind of food is ${response.food}!`);
 
  // to respond back to user 
  if (response.confirm === response.colors) {
  console.log(colors.green('That is my favorite color too!'));
  } else {
   console.log(colors.red('You have great taste?!'))
  }
})
.catch((error) => {
  console.error('Error:', error);
});