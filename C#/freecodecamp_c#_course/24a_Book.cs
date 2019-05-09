using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConstructorsLesson
{
  public class Book
  {
    public string title;
    public string author;
    public int numPages;

    public Book(string aTitle, string aAuthor, int aNumPages)
    {
      title = aTitle;
      author = aAuthor;
      numPages = aNumPages;
    }
  }
}
