#include <stdio.h>

void break_statement() {
	int i;

	for (i = 0; i < 10; i++) {
		if (i == 4) {
			break;
		}

		printf("%d\n", i);
	}
}

void continue_statement() {
	int i;

	for (i = 0; i < 10; i++) {
		if (i == 4) {
			continue;
		}

		printf("%d\n", i);
	}
}

void break_in_while_loop () {
	int i = 0;

	while (i < 10) {
		if (i == 4) {
			break;
		}

		printf("%d\n", i);

		i++;
	}
}

void continue_in_while_loop() {
	int i = 0;

	while (i < 10) {
		if (i == 4) {
			i++;

			continue;
		}

		printf("%d\n", i);

		i++;
	}
}

int main() {
	break_statement();
	continue_statement();
	break_in_while_loop();
	continue_in_while_loop();

	return 0;
}
