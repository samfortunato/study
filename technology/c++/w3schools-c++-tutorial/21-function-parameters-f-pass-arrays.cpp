#include <iostream>

using namespace std;

void iterate_array(int foo[5]);
void log_array_of_nums();

int main() {
	log_array_of_nums();

	return 0;
}

void iterate_array(int foo[5]) {
	for (int i = 0; i < 5; i++) {
		cout << foo[i] << endl;
	}
}

void log_array_of_nums() {
	int foo[5] = {1, 2, 3, 4, 5};

	iterate_array(foo);
}
