import readlineSync from 'readline-sync';

export const whatName = (name = readlineSync.question('May I have your name?')) =>
{
    return name
}