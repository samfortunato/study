#include <iostream>

using namespace std;

void create_reference();
void use_a_reference();

int main() {
	create_reference();
	use_a_reference();

	return 0;
}

void create_reference() {
	string foo = "foo";
	string &bar = foo;
}

void use_a_reference() {
	string foo = "foo";
	string &bar = foo;

	cout << foo << endl;
	cout << bar << endl;
}
