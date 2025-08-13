#include <stdio.h>

enum Foo {
	A,
	B,
	C,
};

enum Bar {
	D = 25,
	E = 50,
	F = 75,
};

enum Baz {
	G = 5,
	H,
	I,
};

void create_enum();
void print_enum_a();
void print_enum_b();
void enum_in_switch_statement();

int main() {
	create_enum();
	print_enum_a();
	print_enum_b();
	enum_in_switch_statement();

	return 0;
}

void create_enum() {
	enum Foo foo = A;
}

void print_enum_a() {
	enum Bar foo = E;

	printf("%d\n", foo);
}

void print_enum_b() {
	enum Baz bar = H;

	printf("%d\n", bar);
}

void enum_in_switch_statement() {
	enum Foo foo = A;

	switch (foo) {
		case 0:
			printf("1\n");
			break;

		case 1:
			printf("2\n");
			break;

		case 2:
			printf("3\n");
			break;

		default:
			printf("HOW DID YOU GET HERE?!");
			break;
	}
}
