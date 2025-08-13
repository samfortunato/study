#include <iostream>

using namespace std;

void while_a();
void while_b();

int main() {
	while_a();
	while_b();

	return 0;
}

void while_a() {
	while (false) {
		// ...
	}
}

void while_b() {
	int i = 0;

	while (i < 5) {
		cout << i << endl;

		i++;
	}
}
