using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WorkingWithNumbers
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine(5002.1);

      Console.WriteLine(5 + 3);
      Console.WriteLine(5 - 3);
      Console.WriteLine(5 / 3);
      Console.WriteLine(5 * 3);
      Console.WriteLine(5 % 3);
      
      Console.WriteLine(5 * (3 + 2));

      Console.WriteLine(5 + 3.0);
      Console.WriteLine(5.2 + 3.0);
      Console.WriteLine(5.0 / 3.0);

      int num = 6;
      Console.WriteLine(num);
      num++;
      Console.WriteLine(num);
      num--;
      Console.WriteLine(num);

      Console.WriteLine(Math.Abs(-10));
      Console.WriteLine(Math.Pow(2, 3));
      Console.WriteLine(Math.Sqrt(36));
      Console.WriteLine(Math.Max(3, -10000));
      Console.WriteLine(Math.Min(3, -10000));
      Console.WriteLine(Math.Round(4.3));
      Console.WriteLine(Math.Round(4.5));
      Console.WriteLine(Math.Floor(4.9));
      Console.WriteLine(Math.Ceiling(4.1));
    }
  }
}
