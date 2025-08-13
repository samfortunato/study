#include <iostream>

using namespace std;

void for_loop_a();
void for_loop_b();
void for_loop_c();
void nested_loops();
void for_each_a();
void for_each_b();

int main() {
	for_loop_a();
	for_loop_b();
	for_loop_c();
	nested_loops();
	for_each_a();
	for_each_b();

	return 0;
}

void for_loop_a() {
	for (int i = 0; i < 10; i++) {
		// ...
	}
}

void for_loop_b() {
	for (int i = 0; i < 5; i++) {
		cout << i << endl;
	}
}

void for_loop_c() {
	for (int i = 0; i <= 10; i += 2) {
		cout << i << endl;
	}
}

void nested_loops() {
	for (int i = 1; i <= 2; i++) {
		cout << "outer: " << i << endl;

		for (int j = 1; j <= 3; j++) {
			cout << "inner: " << j << endl;
		}
	}
}

void for_each_a() {
	int foo[3] = {1, 2, 3};

	for (int num : foo) {
		// ...
	}
}

void for_each_b() {
	int foo[5] = {1, 2, 3, 4, 5};

	for (int num : foo) {
		cout << num << endl;
	}
}
