.global _main
.align 2

.data
fmt: .asciz "%d\n"

.text
_main:
	stp x29, x30, [sp, #-16]!
	mov x29, sp

	mov w0, #5
	add w0, w0, #3

	adrp x1, fmt@PAGE
	add x1, x1, fmt@PAGEOFF
	mov w1, w0
	bl _printf

	mov w0, #0
	ldp x29, x30, [sp], #16
	ret
