#include <stdio.h>

void type_conversion() {
	int x = 5;
	int y = 2;
	int z = x / 5;

	printf("%d", z);
}

void implicit_conversion() {
	float foo = 9;
	printf("%f", foo);

	int bar = 9.99;
	printf("%d", bar);

	float baz = 5 / 2;
	printf("%f", baz);
}

void explicit_conversion_a() {
	float sum = (float) 5 / 2;

	printf("%f", sum);
}

void explicit_conversion_b() {
	int x = 5;
	int y = 2;
	float sum = (float) x / y;

	printf("%f", sum);
}

void explicit_conversion_c() {
	int x = 5;
	int y = 2;
	float sum = (float) x / y;

	printf("%.1f", sum);
}

int main() {
	type_conversion();
	implicit_conversion();
	explicit_conversion_a();
	explicit_conversion_b();
	explicit_conversion_c();
}
