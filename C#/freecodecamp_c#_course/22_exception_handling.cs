using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExceptionHandling
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.Write("Enter an integer: ");
      int num1 = Convert.ToInt32(Console.ReadLine());

      Console.Write("Enter another integer: ");
      int num2 = Convert.ToInt32(Console.ReadLine());

      try
      {
        Console.WriteLine(num1 / num2);
      }
      catch (DivideByZeroException error)
      {
        Console.WriteLine(error.Message);
      }
      catch (FormatException error)
      {
        Console.WriteLine(error.Message);
      }
      catch (Exception error)
      {
        Console.WriteLine(error.Message);
      }
      finally
      {
        // always runs
      }
    }
  }
}
