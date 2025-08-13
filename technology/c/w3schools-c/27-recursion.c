#include <stdio.h>

int nth_triangular_number(int num);

int main() {
	int result = nth_triangular_number(10);

	printf("%d\n", result);

	return 0;
}

int nth_triangular_number(int num) {
	if (num == 0) {
		return num;
	}

	return num + nth_triangular_number(num - 1);
}
