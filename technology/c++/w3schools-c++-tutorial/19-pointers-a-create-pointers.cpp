#include <iostream>

using namespace std;

void get_memory_address();
void pointer();
void ways_to_declare_pointer_variables();

int main() {
	get_memory_address();
	pointer();
	ways_to_declare_pointer_variables();

	return 0;
}

void get_memory_address() {
	string foo = "foo";

	cout << foo << endl;
	cout << &foo << endl;
}

void pointer() {
	string foo = "foo";
	string *bar = &foo;

	cout << foo << endl;
	cout << &foo << endl;
	cout << bar << endl;
}

void ways_to_declare_pointer_variables() {
	string foo = "foo";

	string *bar = &foo;
	string* baz = &foo;
	string * qux = &foo;

	cout << bar << endl;
	cout << baz << endl;
	cout << qux << endl;
}
