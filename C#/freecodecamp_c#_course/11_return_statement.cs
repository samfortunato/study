using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReturnStatements
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine(Cube(3));
    }

    static int Cube(int n)
    {
      return n * n * n;
    }
  }
}
