#include <iostream>

using namespace std;

void break_statement();
void continue_statement();
void break_in_while_loop();
void continue_in_while_loop();

int main() {
	break_statement();
	continue_statement();
	break_in_while_loop();
	continue_in_while_loop();

	return 0;
}

void break_statement() {
	for (int i = 0; i < 10; i++) {
		if (i == 4) {
			break;
		}

		cout << i << endl;
	}
}

void continue_statement() {
	for (int i = 0; i < 10; i++) {
		if (i == 4) {
			continue;
		}

		cout << i << endl;
	}
}

void break_in_while_loop() {
	int i = 0;

	while (i < 10) {
		cout << i << endl;

		i++;

		if (i == 4) {
			break;
		}
	}
}

void continue_in_while_loop() {
	int i = 0;

	while (i < 10) {
		if (i == 4) {
			i++;

			continue;
		}

		cout << i << endl;

		i++;
	}
}
