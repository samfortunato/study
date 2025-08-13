#include <iostream>

using namespace std;

void arrays_a();
void access_array_elements();
void change_array_element();

int main() {
	arrays_a();
	access_array_elements();
	change_array_element();

	return 0;
}

void arrays_a() {
	string cars[4];
	string car_names[4] = {"Lamborghini", "Ferrari", "Ford", "Honda"};

	int foo[3] = {1, 2, 3};
}

void access_array_elements() {
	string foo[3] = {"foo", "bar", "baz"};

	string bar = foo[1];

	cout << bar << endl;
}

void change_array_element() {
	int foo[3] = {1, 2, 3};

	foo[0] = 10;

	cout << foo[0] << endl;
}
