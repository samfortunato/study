#include <iostream>

using namespace std;

void create_booleans();

int main() {
	create_booleans();

	return 0;
}

void create_booleans() {
	bool is_foo = true;
	bool is_bar = false;

	cout << is_foo << endl;
	cout << is_bar << endl;
}
