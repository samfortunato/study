using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GettersAndSetters
{
  class Program
  {
    static void Main(string[] args)
    {
      Movie theAvengers = new Movie("The Avengers", "Joss Whedon", "PG-13");
      Movie fistingFiremen5 = new Movie("Fisting Firemen 5", "Your Mom", "X");

      Console.WriteLine(theAvengers.director);

      theAvengers.Rating = "shingo";
      Console.WriteLine(theAvengers.Rating);
    }
  }

  class Movie
  {
    public string title;
    public string director;

    private string rating;

    public Movie(string aTitle, string aDirector, string aRating)
    {
      title = aTitle;
      director = aDirector;
      Rating = aRating;
    }

    public string Rating
    {
      get
      {
        return rating;
      }

      set
      {
        string[] validRatings = {"G", "PG", "PG-13", "R", "NC-17", "X", "NR"};

        if (validRatings.Contains(value))
          rating = value;
        else
          rating = "NR";
      }
    }
  }
}
