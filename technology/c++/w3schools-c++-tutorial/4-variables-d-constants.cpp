void defining_const_cant_overwrite();
void const_for_unlikely_to_change_variables();

int main() {
	defining_const_cant_overwrite();
	const_for_unlikely_to_change_variables();

	return 0;
}

void defining_const_cant_overwrite() {
	const int foo = 1;

	// can't do
	// foo = 2;
}

void const_for_unlikely_to_change_variables() {
	const float PI = 3.14;
	const int MINUTES_PER_HOUR = 60;
}
