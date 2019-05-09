using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StaticMethodsAndClasses
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine(Math.Sqrt(144));
      UsefulTools.SayHi("Ding Shom");
    }

  }

  static class UsefulTools
  {
    public static void SayHi(string name)
    {
      Console.WriteLine($"Sup {name}");
    }
  }
}
