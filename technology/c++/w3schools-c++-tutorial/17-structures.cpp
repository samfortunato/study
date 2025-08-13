#include <iostream>

using namespace std;

struct Foo {
	int bar;
	string baz;
};

struct Car {
	string make;
	string model;
	int year;
};

void create_a_struct();
void assign_data_to_a_struct();
void one_structure_to_many_variables();
void one_structure_to_two_variables();
void use_named_structure();
void use_named_structure_and_define_members();

int main() {
	create_a_struct();
	assign_data_to_a_struct();
	one_structure_to_many_variables();
	one_structure_to_two_variables();
	use_named_structure();
	use_named_structure_and_define_members();

	return 0;
}

void create_a_struct() {
	struct {
		int bar;
		string baz;
	} foo;
}

void assign_data_to_a_struct() {
	struct {
		int bar;
		string baz;
	} foo;

	foo.bar = 1;
	foo.baz = "qux";

	cout << foo.bar << endl;
	cout << foo.baz << endl;
}

void one_structure_to_many_variables() {
	struct {
		int qux;
		string quux;
	} foo, bar, baz;
}

void one_structure_to_two_variables() {
	struct {
		string make;
		string model;
		int year;
	} car_1, car_2;

	car_1.make = "Lamborghini";
	car_1.model = "Revuelto";
	car_1.year = 2024;

	car_2.make = "Honda";
	car_2.model = "Civic Type R";
	car_2.year = 2024;

	cout << car_1.make << " " << car_1.model << " " << car_1.year << endl;
	cout << car_2.make << " " << car_2.model << " " << car_2.year << endl;
}

void use_named_structure() {
	Foo foo;
}

void use_named_structure_and_define_members() {
	Car car_1;
	car_1.make = "Honda";
	car_1.model = "Civic Type R";
	car_1.year = 2024;

	Car car_2;
	car_2.make = "Toyota";
	car_2.model = "Camry";
	car_2.year = 2024;

	cout << car_1.make << " " << car_1.model << " " << car_1.year << endl;
	cout << car_2.make << " " << car_2.model << " " << car_2.year << endl;
}
