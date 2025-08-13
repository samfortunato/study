#include <stdio.h>

void data_types() {
	int foo = 5;
	float bar = 5.99;
	char baz = 'a';

	printf("%d", foo);
	printf("%f", bar);
	printf("%c", baz);
}

void set_decimal_precision_a() {
	float foo = 5.99;
	double bar = 19.99;

	printf("%f\n", foo);
	printf("%lf", bar);
}

void set_decimal_precision_b() {
	float foo = 3.5;

	printf("%f\n", foo);
	printf("%.1f\n", foo);
	printf("%.2f\n", foo);
	printf("%.4f", foo);
}

int main() {
	data_types();
	set_decimal_precision_a();
	set_decimal_precision_b();
}
