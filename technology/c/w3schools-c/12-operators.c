#include <stdio.h>

void assignment_operators() {
	int foo = 100 + 50;
	int bar = foo + 50;
	int baz = foo + bar;

	printf("%d", foo);
	printf("%d", bar);
	printf("%d", baz);

	int qux = 10;
	qux += 5;

	printf("%d", qux);
}

void all_assignment_operators() {
	int foo = 1;

	foo += 1;
	foo -= 1;
	foo *= 1;
	foo /= 1;
	foo %= 1;
	foo &= 1;
	foo |= 1;
	foo ^= 1;
	foo >>= 1;
	foo <<= 1;

	printf("%d", foo);
}

void comparison_operators() {
	int x = 5;
	int y = 3;

	printf("%d", x > y);
}

void all_comparison_operators() {
	int foo = 1;
	int bar = 2;

	printf("%d", foo == bar);
	printf("%d", foo != bar);
	printf("%d", foo > bar);
	printf("%d", foo < bar);
	printf("%d", foo >= bar);
	printf("%d", foo <= bar);
}

void logical_operators() {
	int foo = 1;
	int bar = 0;

	printf("%d", foo && bar);
	printf("%d", foo || bar);
	printf("%d", !foo);
}

void sizeof_operator() {
	int foo;
	float bar;
	double baz;
	char qux;

	printf("%lu", sizeof(foo));
	printf("%lu", sizeof(bar));
	printf("%lu", sizeof(baz));
	printf("%lu", sizeof(qux));
}

int main() {
	assignment_operators();
	all_assignment_operators();
	comparison_operators();
	all_comparison_operators();
	logical_operators();

	return 0;
}
