#include <iostream>

using namespace std;

void modify_pointer_value();

int main() {
	modify_pointer_value();

	return 0;
}

void modify_pointer_value() {
	string foo = "foo";
	string *bar = &foo;

	cout << foo << endl;
	cout << &foo << endl;
	cout << bar << endl;
	cout << *bar << endl;

	// *bar == foo
	*bar = "bar";

	cout << *bar << endl;
	cout << foo << endl;
}
