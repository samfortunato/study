#include <iostream>

using namespace std;

void create_int();
void create_float();
void create_double();
void create_scientific_notation_numbers();

int main() {
	create_int();
	create_float();
	create_double();
	create_scientific_notation_numbers();

	return 0;
}

void create_int() {
	int foo = 100;

	cout << foo << endl;
}

void create_float() {
	float foo = 1.11;

	cout << foo << endl;
}

void create_double() {
	double foo = 1.1111111111;

	cout << foo << endl;
}

void create_scientific_notation_numbers() {
	float foo = 35e3;
	double bar = 12E4;

	cout << foo << endl;
	cout << bar << endl;
}
