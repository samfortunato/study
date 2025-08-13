#include <iostream>

using namespace std;

void if_else_a();
void if_else_b();

int main() {
	if_else_a();
	if_else_b();

	return 0;
}

void if_else_a() {
	if (1) {
		// ...
	} else {
		// ...
	}
}

void if_else_b() {
	int time = 20;

	if (time < 18) {
		cout <<	"daytime" << endl;
	} else {
		cout << "nighttime" << endl;
	}
}
