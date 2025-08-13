#include <iostream>

using namespace std;

void loop_through_an_array();
void loop_through_array_with_indices();
void loop_through_array_of_integers();
void foreach_loop();

int main() {
	loop_through_an_array();
	loop_through_array_with_indices();
	loop_through_array_of_integers();
	foreach_loop();

	return 0;
}

void loop_through_an_array() {
	string foo[5] = {"foo", "bar", "baz", "qux", "quux"};

	for (int i = 0; i < 5; i++) {
		cout << foo[i] << endl;
	}
}

void loop_through_array_with_indices() {
	string foo[5] = {"foo", "bar", "baz", "qux", "quux"};

	for (int i = 0; i < 5; i++) {
		cout << i << ": " << foo[i] << endl;
	}
}

void loop_through_array_of_integers() {
	int foo[5] = {1, 2, 3, 4, 5};

	for (int i = 0; i < 5; i++) {
		cout << foo[i] << endl;
	}
}

void foreach_loop() {
	int foo[5] = {1, 2, 3, 4, 5};

	for (int num : foo) {
		cout << num << endl;
	}
}
