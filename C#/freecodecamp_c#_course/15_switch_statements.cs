using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SwitchStatements
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine(GetDay(3));
      Console.WriteLine(GetDay_Better(3));
    }

    static string GetDay(int dayNum)
    {
      switch (dayNum)
      {
        case 0:
          return "Sunday";
          // break;
        case 1:
          return "Monday";
        case 2:
          return "Tuesday";
        case 3:
          return "Wednesday";
        case 4:
          return "Thursday";
        case 5:
          return "Friday";
        case 6:
          return "Saturday";
        default:
          return "Invalid day";
      }
    }

    static string GetDay_Better(int dayNum)
    {
      string[] daysOfWeek = {
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      };

      if (dayNum < 0 || dayNum > 6)
        return "Invalid day";
      else
        return daysOfWeek[dayNum];
    }
  }
}
