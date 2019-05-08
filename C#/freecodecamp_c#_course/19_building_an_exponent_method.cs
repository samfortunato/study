using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuildingAnExponentMethod
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine(MyPow(3, 5));
    }

    static double MyPow(double baseNum, double exponent)
    {
      double product = baseNum;
      
      for (int i = 1; i < exponent; i++)
        product *= baseNum;

      return product;
    }
  }
}
