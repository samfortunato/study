#include <iostream>

using namespace std;

void do_while_a();
void do_while_b();

int main() {
	do_while_a();
	do_while_b();

	return 0;
}

void do_while_a() {
	do {
		// ...
	} while (1 > 2);
}

void do_while_b() {
	int i = 0;

	do {
		cout << i << endl;

		i++;
	} while (i < 5);
}
