#include <iostream>

using namespace std;

void else_if_a();
void else_if_b();

int main() {
	else_if_a();
	else_if_b();

	return 0;
}

void else_if_a() {
	if (1) {
		// ...
	} else if (2) {
		// ...
	} else {
		// ...
	}
}

void else_if_b() {
	int time = 22;

	if (time < 10) {
		cout << "daytime" << endl;
	} else if (time < 20) {
		cout << "midday" << endl;
	} else {
		cout << "nighttime" << endl;
	}
}
