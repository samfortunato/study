using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassesAndObjects
{
  class Program
  {
    static void Main(string[] args)
    {
      Book book1 = new Book();
      book1.title = "Lord of the Rings";
      book1.author = "J.R.R. Tolkien";
      book1.numPages = 10000;

      Console.WriteLine(book1.title);

      Book playboyIssueOne = new Book();
      playboyIssueOne.title = "Playboy Issue #1";
      playboyIssueOne.author = "Hugh Hefner";
    }
  }
}
