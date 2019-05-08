using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuildingABetterCalculator
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.Write("Enter a number: ");
      double num1 = Convert.ToDouble(Console.ReadLine());

      Console.Write("Enter an operation: ");
      char operatorChar = Convert.ToChar(Console.ReadLine());

      Console.Write("Enter another number: ");
      double num2 = Convert.ToDouble(Console.ReadLine());

      switch (operatorChar)
      {
        case '+':
          Console.WriteLine(num1 + num2);
          break;
        case '-':
          Console.WriteLine(num1 - num2);
          break;
        case '*':
          Console.WriteLine(num1 * num2);
          break;
        case '/':
          Console.WriteLine(num1 / num2);
          break;
        case '%':
          Console.WriteLine(num1 % num2);
          break;
        default:
          Console.WriteLine("Invalid operation");
          break;
      }
    }
  }
}
