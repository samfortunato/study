using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IfStatements
{
  class Program
  {
    static void Main(string[] args)
    {
      bool isTrue = true;

      if (isTrue) {
        Console.WriteLine("IT'S TRUE MOTHAFUCKA");
      } else if (2 + 2 == 5 && true || false || !isTrue) {
        Console.WriteLine("Will not execute");
      } else {
        Console.WriteLine("FUCK OFF");
      }
    }
  }
}
