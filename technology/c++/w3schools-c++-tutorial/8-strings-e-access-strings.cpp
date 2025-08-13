#include <iostream>

using namespace std;

void access_strings_a();
void access_strings_b();
void change_characters();

int main() {
	access_strings_a();
	access_strings_b();
	change_characters();

	return 0;
}

void access_strings_a() {
	string foo = "foo";

	cout << foo[0] << endl;
}

void access_strings_b() {
	string foo = "foo";

	char bar = foo[1];

	cout << bar << endl;
}

void change_characters() {
	string foo = "foo";

	foo[1] = 'a';

	cout << foo << endl;
}
