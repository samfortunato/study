using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StaticClassAttributes
{
  class Program
  {
    static void Main(string[] args)
    {
      Song route27 = new Song("Route 27", "Go Ichinose", 80);
      Console.WriteLine(Song.songCount);

      Song enemyApproaches = new Song("Enemy Approaches!!", "Toby Fox", 93);
      Console.WriteLine(Song.songCount);
    }
  }

  class Song
  {
    public static int songCount = 0;
    
    public string title;
    public string artist;
    public int duration;

    public Song(string aTitle, string aArtist, int aDuration)
    {
      title = aTitle;
      artist = aArtist;
      duration = aDuration;

      songCount++;
    }
  }
}
