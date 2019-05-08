using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TwoDArrays
{
  class Program
  {
    static void Main(string[] args)
    {
      int[,] twoDArray = {
        {1, 2, 3},
        {4, 5, 6}
      };

      // dataType[,] - 1 comma for 2D
      // dataType[, ,] - 2 commas for 3D
      // etc.

      // if you don't initialize with a value:
      int[,] twoDArrayBlank = new int[2,3];
      // 2D int array with two elements
      // - each element is an array with 3 elements
    }
  }
}
