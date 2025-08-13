#include <iostream>

using namespace std;

void print_name_and_age(string name, int age);

int main() {
	print_name_and_age("Foo", 21);
	print_name_and_age("Bar", 33);
	print_name_and_age("Baz", 14);

	return 0;
}

void print_name_and_age(string name, int age) {
	string name_string = "name: " + name;
	string age_string = "age: " + to_string(age);
	string delimiter = "; ";

	cout << name_string << delimiter << age_string << endl;
}
