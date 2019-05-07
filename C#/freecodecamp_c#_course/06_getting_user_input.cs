using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GettingUserInput
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.Write("Type something, and hit enter: ");
      string inputOne = Console.ReadLine();

      Console.WriteLine(inputOne);
    }
  }
}
