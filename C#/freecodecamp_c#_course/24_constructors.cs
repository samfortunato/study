using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using ConstructorsLesson.Book;

namespace ConstructorsLesson
{
  class Program
  {
    static void Main(string[] args)
    {
      Book lordOfTheRings = new Book(
        "Lord of the Rings",
        "J.R.R. Tolkien",
        10000
      );

      Book playboyIssueOne = new Book(
        "Playboy Issue #1",
        "Hugh Hefner",
        26
      );

      Console.WriteLine(lordOfTheRings.title);
      Console.WriteLine(playboyIssueOne.author);
    }
  }
}
