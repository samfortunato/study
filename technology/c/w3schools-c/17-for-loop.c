#include <stdio.h>

void for_loop_a() {
	int i;

	for (i = 0; i < 5; i++) {
		// ...
	}
}

void for_loop_b() {
	int i;

	for (i = 0; i < 5; i++) {
		printf("%d\n", i);
	}
}

void for_loop_c() {
	int i;

	for (i = 0; i <= 10; i += 2) {
		printf("%d\n", i);
	}
}

void nested_loops() {
	int i, j;

	for (i = 1; i <= 2; i++) {
		printf("i = %d\n", i);

		for (j = 1; j <= 2; j++) {
			printf("j = %d\n", j);
		}
	}
}

int main() {
	for_loop_a();
	for_loop_b();
	for_loop_c();
	nested_loops();

	return 0;
}
