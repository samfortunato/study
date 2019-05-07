using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Methods
{
  class Program
  {
    static void Main(string[] args)
    {
      SayHello("shonk", 10);
      SayHello("big tits", 18);
      SayHello("i love girls panties", 100000);
    }

    static void SayHello(string name, int age)
    {
      Console.WriteLine($"Hello {name}. You are {age} years old");
    }
  }
}
