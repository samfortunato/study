#include <iostream>

using namespace std;

class Foo {
	public:
		int foo;
		string bar;
};

class Car {
	public:
		string make;
		string model;
		int year;
};

void create_an_instance();
void create_multiple_instances();

int main() {
	create_an_instance();
	create_multiple_instances();

	return 0;
}

void create_an_instance() {
	Foo foo;

	foo.foo = 1;
	foo.bar = "foo";

	cout << foo.foo << endl;
	cout << foo.bar << endl;
}

void create_multiple_instances() {
	Car car_1, car_2;

	car_1.make = "Honda";
	car_1.model = "Civic Type R";
	car_1.year = 2024;

	car_2.make = "Lamborghini";
	car_2.model = "Revuelto";
	car_2.year = 2024;

	cout << car_1.make << " " << car_1.model << " " << car_1.year << endl;
	cout << car_2.make << " " << car_2.model << " " << car_2.year << endl;
}
