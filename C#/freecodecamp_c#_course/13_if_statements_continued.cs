using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IfStatementsContinued
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine(MyMax(3.4, 7.0));
      Console.WriteLine(4 == 4);
    }

    static double MyMax(double n, double m)
    {
      if (n > m) return n;
      return m;
    }
  }
}
