#include <iostream>

using namespace std;

class Movie
{
  public:
    string title;
    string director;

    Movie(string aTitle, string aDirector, string aRating)
    {
      title = aTitle;
      director = aDirector;
      setRating(aRating);
    }

    void setRating(string aRating)
    { 
      if (
        aRating == "G"
        || aRating == "PG"
        || aRating == "PG-13"
        || aRating == "R"
        || aRating == "NC-17"
        || aRating == "NR"
      ) {
        rating = aRating;
      } else {
        rating = "NR";
      }
    }

    string getRating()
    {
      return rating;
    }

  private:
    string rating;
};

int main()
{
  Movie avengers("The Avengers", "Joss Whedon", "PG-13");

  cout << avengers.title << endl;
  cout << avengers.director << endl;
  cout << avengers.getRating() << endl;

  avengers.setRating("shimgo");
  cout << avengers.getRating() << endl;
  
  return 0;
}
