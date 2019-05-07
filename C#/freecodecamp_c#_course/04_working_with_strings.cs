using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WorkingWithStrings
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Split\nthe line\nmotherfucker");
      Console.WriteLine("Escape \"quotes\"");

      string phrase = "BINg bong";
      //               012345678
      Console.WriteLine(phrase);
      Console.WriteLine(phrase.Length);

      Console.WriteLine(phrase.ToUpper());
      Console.WriteLine(phrase.ToLower());

      Console.WriteLine(phrase.Contains("bo"));
      // True

      Console.WriteLine(phrase[3]);
      // g

      Console.WriteLine(phrase.IndexOf('g'));
      // 3
      Console.WriteLine(phrase.IndexOf('z'));
      // -1 ("z" is not in the string)

      Console.WriteLine(phrase.Substring(5, 2));
      // "bo"
    }
  }
}
