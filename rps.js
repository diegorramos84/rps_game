import promptSync from 'prompt-sync'
import chalk from 'chalk'

const prompt = promptSync()

console.log(chalk.bgBlue('----------------------------------------------------'))
console.log(chalk.blue('Hello! Welcome to the Rock, Paper and Scissors game:'))
console.log(chalk.bgBlue('----------------------------------------------------'))

let end = 'yes'

while (end !== 'no') {
  console.log('Please select Rock, Paper or Scissors to start playing or Exit to leave the game')
  let player_choice = prompt('Choice: ')

  const choices = ['Rock', 'Paper', 'Scissors']

  let pc_choice = choices[Math.floor(Math.random()*choices.length)]

  if (player_choice === 'exit') {
    console.log(chalk.bgGray('Bye bye!'))
    process.exit(0)
  }

  if (player_choice === '' || player_choice === undefined) {
    console.log(chalk.bgRed('Please enter a valid option!!!!'))
  }


  // ################# ROCK ########################
  if (player_choice === 'Rock' && pc_choice === 'Rock') {
    console.log(`Your choice: ${player_choice}`)
    console.log(`PC choice: ${pc_choice}`)
    console.log(chalk.yellow('Tie!'))
    end = prompt('Play again? yes or no: ')
  }

  if (player_choice === 'Rock' && pc_choice === 'Paper') {
    console.log(`Your choice: ${player_choice}`)
    console.log(`PC choice: ${pc_choice}`)
    console.log(chalk.red('You lost!'))
    end = prompt('Play again? yes or no: ')
  }

  if (player_choice === 'Rock' && pc_choice === 'Scissors') {
    console.log(`Your choice: ${player_choice}`)
    console.log(`PC choice: ${pc_choice}`)
    console.log(chalk.green('You Won!'))
    end = prompt('Play again? yes or no: ')
  }

  // ################# PAPER ########################

  if (player_choice === 'Paper' && pc_choice === 'Paper') {
    console.log(`Your choice: ${player_choice}`)
    console.log(`PC choice: ${pc_choice}`)
    console.log(chalk.yellow('Tie!'))
    end = prompt('Play again? yes or no: ')
  }

  if (player_choice === 'Paper' && pc_choice === 'Scissors') {
    console.log(`Your choice: ${player_choice}`)
    console.log(`PC choice: ${pc_choice}`)
    console.log(chalk.red('You lost!'))
    end = prompt('Play again? yes or no: ')
  }

  if (player_choice === 'Paper' && pc_choice === 'Rock') {
    console.log(`Your choice: ${player_choice}`)
    console.log(`PC choice: ${pc_choice}`)
    console.log(chalk.green('You Won!'))
    end = prompt('Play again? yes or no: ')
  }

  // ################# SCISSOR ########################
  if (player_choice === 'Scissors' && pc_choice === 'Scissors') {
    console.log(`Your choice: ${player_choice}`)
    console.log(`PC choice: ${pc_choice}`)
    console.log(chalk.yellow('Tie!'))
    end = prompt('Play again? yes or no: ')
  }

  if (player_choice === 'Scissors' && pc_choice === 'Rock') {
    console.log(`Your choice: ${player_choice}`)
    console.log(`PC choice: ${pc_choice}`)
    console.log(chalk.red('You lost!'))
    end = prompt('Play again? yes or no: ')
  }

  if (player_choice === 'Scissors' && pc_choice === 'Paper') {
    console.log(`Your choice: ${player_choice}`)
    console.log(`PC choice: ${pc_choice}`)
    console.log(chalk.green('You Won!'))
    end = prompt('Play again? yes or no: ')
  }


}
