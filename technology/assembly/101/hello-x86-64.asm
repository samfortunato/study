global _main
extern _printf
extern _exit

section .data
	fmt db "%d", 10, 0

section .text
_main:
	push rbp
	mov rbp, rsp

	mov eax, 5
	add eax, 3

	lea rdi, [rel fmt]
	mov esi, eax
	xor eax, eax
	call _printf

	xor edi, edi
	call _exit
