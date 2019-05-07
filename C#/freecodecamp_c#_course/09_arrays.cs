using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Arrays
{
  class Program
  {
    static void Main(string[] args)
    {
      int[] nums = {1, 2, 3, 4, 5};
      string[] names = {"Tits", "McGee", "Shimbee"};

      Console.WriteLine(nums[2]);
      Console.WriteLine(names[1]);

      names[2] = "Big Cock with Tits";
      Console.WriteLine(names[2]);

      int[] blankIntArray = new int[10];
      // blank int array with 10 empty spaces;
      blankIntArray[0] = 17;

      Console.WriteLine(blankIntArray[0]);
    }
  }
}
