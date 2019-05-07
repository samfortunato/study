using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuildingAMadLibsGame
{
  class Program
  {
    static void Main(string[] args)
    {
      string name, bodyPart, noun;
      
      Console.Write("Enter a name: ");
      name = Console.ReadLine();

      Console.Write("Enter a body part: ");
      bodyPart = Console.ReadLine();

      Console.Write("Finally, enter a noun: ");
      noun = Console.ReadLine();
      
      Console.WriteLine($"Sup dude, your name is {name}");
      Console.WriteLine($"Fuck my fucking {bodyPart}");
      Console.WriteLine($"{noun} is stupid");
    }
  }
}
