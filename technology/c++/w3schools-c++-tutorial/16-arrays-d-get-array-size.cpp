#include <iostream>

using namespace std;

void size_of_an_array();
void length_of_an_array();
void loop_through_array_with_for_loop();
void loop_through_array_with_sizeof();
void loop_through_array_with_foreach();

int main() {
	size_of_an_array();
	length_of_an_array();
	loop_through_array_with_for_loop();
	loop_through_array_with_sizeof();
	loop_through_array_with_foreach();

	return 0;
}

void size_of_an_array() {
	int foo[] = {1, 2, 3, 4, 5};

	int size_in_bytes = sizeof(foo);

	cout << size_in_bytes << endl;
}

void length_of_an_array() {
	int foo[] = {1, 2, 3, 4, 5};

	int foo_length = sizeof(foo) / sizeof(int);

	cout << foo_length << endl;
}

void loop_through_array_with_for_loop() {
	int foo[] = {1, 2, 3, 4, 5};

	for (int i = 0; i < 5; i++) {
		cout << foo[i] << endl;
	}
}

void loop_through_array_with_sizeof() {
	int foo[] = {1, 2, 3, 4, 5};
	int foo_length = sizeof(foo) / sizeof(int);

	for (int i = 0; i < foo_length; i++) {
		cout << foo[i] << endl;
	}
}

void loop_through_array_with_foreach() {
	int foo[] = {1, 2, 3, 4, 5};

	for (int num : foo) {
		cout << num << endl;
	}
}
