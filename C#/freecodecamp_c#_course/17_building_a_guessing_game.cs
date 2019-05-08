using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuildingAGuessingGame
{
  class Program
  {
    static void Main(string[] args)
    {
      string secretWord = "shingo";
      string guess = "";
      int guessCount = 0;

      while (guess != secretWord && guessCount < 3)
      {
        Console.Write("Guess the secret word: ");
        guess = Console.ReadLine();

        guessCount++;
      }

      if (guess == secretWord)
        Console.WriteLine("You win!");
      else
        Console.WriteLine("Too many guesses. You lose!");
    }
  }
}
