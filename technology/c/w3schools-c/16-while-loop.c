#include <stdio.h>

void while_loop_a() {
	while (1) {
		// ...

		break;
	}
}

void while_loop_b() {
	int i = 0;

	while (i < 5) {
		printf("%d\n", i);

		i++;
	}
}

void do_while_a() {
	int i = 0;

	do {
		// ...

		i++;
	} while (i < 5);
}

void do_while_b() {
	int i = 0;

	do {
		printf("%d\n", i);

		i++;
	} while (i < 5);
}

int main() {
	while_loop_a();
	while_loop_b();
	do_while_a();
	do_while_b();

	return 0;
}
