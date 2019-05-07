using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuildingACalculator
{
  class Program
  {
    static void Main(string[] args)
    {
      double num1, num2;

      Console.Write("Enter a number: ");
      num1 = Convert.ToDouble(Console.ReadLine());

      Console.Write("Enter another number: ");
      num2 = Convert.ToDouble(Console.ReadLine());

      Console.WriteLine("Addition result: " + (num1 + num2));
    }
  }
}
