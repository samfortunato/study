#include <iostream>

using namespace std;

string getDayOfWeekSwitch(int dayNumber)
{
  string dayName;

  switch (dayNumber) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      return "Invalid day number";
  }

  return dayName;
}

string getDayOfWeek(int dayNumber)
{
  string days[] = {
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday,",
    "Saturday"
  };

  return days[dayNumber - 1];
}

int main()
{
  cout << getDayOfWeek(7) << endl;
  cout << getDayOfWeekSwitch(3) << endl;
  
  return 0;
}
