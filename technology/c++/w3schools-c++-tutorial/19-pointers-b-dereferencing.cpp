#include <iostream>

using namespace std;

void dereference();

int main() {
	dereference();

	return 0;
}

void dereference() {
	string foo = "foo";
	string *bar = &foo;

	cout << foo << endl;
	cout << bar << endl;
	cout << *bar << endl;
}
