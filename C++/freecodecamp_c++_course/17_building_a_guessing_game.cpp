#include <iostream>

using namespace std;

int main()
{
  int secretNum = 7;
  int guess;
  int guessCount = 0;
  int maxGuesses = 3;

  while (guess != secretNum) {
    cout << "Guess the secret integer: ";
    cin >> guess;
    guessCount++;

    if (guessCount == maxGuesses) break;
  }

  if (guessCount == 3 && guess != secretNum) {
    cout << "Too many guesses. You lose!" << endl;
  } else {
    cout << "You won!" << endl;
  }
  
  return 0;
}
