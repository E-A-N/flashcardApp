globalRoutines.armASM1 = () => {
    let quizArray = [
        {
            question: "What are the general-purpose registers in AArch64 (ARM64)?",
            answer: "x0–x30 (32-bit aliases: w0–w30). x0–x7 are argument/return registers, x8 is the indirect result register (ITR), x9–x15 are temporary, x16–x17 are intra-procedure temporaries, x18 is platform-reserved, x19–x28 are callee-saved, x29 is FP (frame pointer), x30 is LR (link register). x31 is SP (stack pointer)."
        },
        {
            question: "What is the AAPCS64 calling convention for AArch64?",
            answer: "Arguments: x0–x7 (first 8 integer/pointer args), v0–v7 (first 8 FP args). Return: x0 (integer), v0 (FP). Callee-saved: x19–x28, v8–v15. Caller-saved: x0–x18, v0–v7. Stack must be 16-byte aligned at function entry. LR (x30) holds the return address."
        },
        {
            question: "What is the difference between BL and B in ARM64?",
            answer: "B (branch) jumps to a target without saving the return address. BL (branch and link) jumps to a target and stores the return address in LR (x30). Use BL for function calls, B for jumps/loops. BX is the AArch32 equivalent of BR in AArch64."
        },
        {
            question: "How do conditional branches work in AArch64?",
            answer: "Conditional branches (B.eq, B.ne, B.gt, B.lt, etc.) test the NZCV flags in the CPSR and branch if the condition is true. In AArch64, most ALU instructions have a 's' suffix to update flags (e.g., SUBS). Without the suffix, flags are not modified. This differs from AArch32 where most instructions update flags by default."
        },
        {
            question: "What is the barrel shifter in ARM and how does it work?",
            answer: "ARM's ALU can shift an operand in a single instruction cycle (no separate shift instruction). In AArch32: LSL (logical left), LSR (logical right), ASR (arithmetic right), ROR (rotate right), RRX (rotate right extended). In AArch64: LSL, LSR, ASR, LSR/ASR by register or immediate. The shift amount is encoded in the instruction itself."
        },
        {
            question: "What do LDR and STR do in ARM assembly?",
            answer: "LDR (load register) reads a value from memory into a register: LDR X0, [X1] loads 8 bytes from address in X1 into X0. STR (store register) writes a register to memory: STR X0, [X1, #8] stores X0 at address X1+8. ARM is a load/store architecture — all memory access goes through these instructions; ALU ops work on registers only."
        },
        {
            question: "What is the difference between LDR (immediate) and LDR (literal) in ARM?",
            answer: "In AArch32, LDR R0, [PC, #offset] loads from a PC-relative address (literal pool). In AArch64, LDR X0, [X1, #offset] is a base+immediate load. AArch64 also has LDR X0, =value (a pseudo-instruction the assembler resolves to a literal pool entry). AArch64 removed the PC-relative LDR form; use ADR/ADRPage for PC-relative addressing."
        },
        {
            question: "How do PUSH and POP work in ARM assembly?",
            answer: "PUSH {X0, X1} is a multi-register store: it decrements SP by 8*n and stores the listed registers. POP {X0, X1} is a multi-register load: it loads the registers and increments SP. In AArch64, these are pseudo-instructions that assemble to STP/LDP (store/load pair). STP X29, X30, [SP, #-16]! is the standard function prologue."
        },
        {
            question: "What is STP/LDP (store/load pair) in AArch64?",
            answer: "STP Xt, Xt2, [Xn, #offset] stores two registers to consecutive 8-byte slots. LDP Xt, Xt2, [Xn, #offset] loads two registers from consecutive slots. The offset can be pre-index ([SP, #-16]!) or post-index ([SP], #16). More efficient than two separate STR/LDR because it's a single instruction with a combined memory operation."
        },
        {
            question: "What is the purpose of the frame pointer (FP / x29)?",
            answer: "FP points to the current function's stack frame, enabling access to local variables and the previous frame pointer. In a prologue: STP X29, X30, [SP, #-16]! ; MOV X29, SP. In an epilogue: LDP X29, X30, [SP], #16 ; RET. Omitting FP (common in -O2) saves a register and a store/load but makes debugging and stack walking harder."
        },
        {
            question: "What is the RET instruction in ARM64?",
            answer: "RET branches to the address in LR (x30): effectively B LR. RETABR branches to the address in the function descriptor (used in AArch64 with position-dependent code). A function epilogue is typically: LDP X29, X30, [SP], #16 ; RET."
        },
        {
            question: "How does the AArch64 function descriptor work?",
            answer: "In position-dependent AArch64 code, a function call target is a 16-byte descriptor: [code_pointer, x18_initial_value]. BL loads the descriptor, and RETABR branches to the code pointer while setting x18. This allows the linker to patch x18 (used for TLS) without rewriting the branch. With -fPIE/-fPIC, this is bypassed."
        },
        {
            question: "What is ADR vs ADRP in AArch64?",
            answer: "ADRP X0, label computes the page-aligned address of label (4KB granularity) — used for PC-relative access to data/other functions. ADR X0, label computes the full address (within ±1MB). For far references: ADRP + ADD (page + offset). ADR is limited to ±1MB; ADRP covers ±4GB."
        },
        {
            question: "How do you implement a loop in ARM64 assembly?",
            answer: "MOV X0, #10  ; counter\nloop:\nSUBS X0, X0, #1\nB.ne loop       ; branch if not equal (flags updated by SUBS)\nNo dedicated loop instruction — use a counter with SUBS + B.cond, or compare a pointer to an end address with CMP + B.lo."
        },
        {
            question: "What is the difference between CMP and SUBS?",
            answer: "CMP is SUBS with the result discarded (no register write). CMP X0, #5 sets flags as if computing X0 - 5 but doesn't store the result. Use CMP before a conditional branch. SUBS X0, X0, #5 both computes the difference into X0 and sets flags. They're the same instruction with a different encoding."
        },
        {
            question: "How do you perform a bitwise AND with the NOT of a register in ARM64?",
            answer: "BIC X0, X1, X2 computes X1 AND (NOT X2) in one instruction. This is the 'bit clear' operation — it clears the bits in X1 that are set in X2. Equivalent to AND X0, X1, NOT X2 (which doesn't exist as a single instruction in AArch64). BIC is essential for clearing flags/modes in register fields."
        },
        {
            question: "What are the bit-field instructions in AArch64 (UBFX, BFC, BFI)?",
            answer: "UBFX Xd, Xn, #l, #w extracts a zero-extended bit field [l+w-1 : l]. BFC Xd, #l, #w clears a bit field. BFI Xd, Xn, #l, #w inserts a bit field from Xn into Xd. These replace multi-instruction sequences (shift + mask) for register field manipulation, like modifying CPSR or system register fields."
        },
        {
            question: "What is RBIT and what is it used for?",
            answer: "RBIT X0, X1 reverses all 32 or 64 bits of X1 into X0. Used for endianness conversion, bit-reversal in FFT/FFT butterflies, computing CRC variants, and generating lookup table indices. Available from ARMv8.0. The 32-bit version (w-registers) reverses only the low 32 bits."
        },
        {
            question: "What is CLZ and what is it used for?",
            answer: "CLZ X0, X1 counts the number of leading zeros in X1. Used for: finding the position of the highest set bit (64 - CLZ), normalizing floating-point values, computing log2, and in hash functions. Returns 64 (or 32) if the input is zero. Single instruction, no branch."
        },
        {
            question: "How does ARM64 handle atomic operations (LDXR/STXR)?",
            answer: "LDXR X0, [X1] loads from X1 into X0 and marks the address for exclusive monitoring. STXR Ws, X2, [X1] stores X2 to X1 and writes 0 to Ws on success, 1 on failure (another core wrote to that address). Loop: retry on failure. This is the basis for compare-and-swap (CAS) and lock-free data structures. AArch64 also has dedicated CAS/CASP instructions (ARMv8.1+)."
        },
        {
            question: "What is the difference between CAS and LDXR/STXR in AArch64?",
            answer: "CAS Xs, Xt, [Xn] atomically compares the memory at Xn with Xs; if equal, stores Xt. It's a single instruction (ARMv8.1+), no retry loop needed. LDXR/STXR is the older exclusive monitor approach requiring a retry loop. CAS is simpler and preferred when available; LDXR/STXR works on all AArch64 implementations."
        },
        {
            question: "How does the Rust asm! macro work for inline ARM assembly?",
            answer: "asm!(\"ADD {out}, {a}, {b}\", out(out), in(\"x0\") a, ...); Operands are named and the compiler maps them to registers. in(\"x0\") ties an input to a specific register. lateout(\"x1\") for outputs. Options: nomem, preserves_flags, pure. The compiler handles register allocation around the asm block and can reorder/copy as needed."
        },
        {
            question: "What is the difference between .global and .local in ARM assembly?",
            answer: ".global label makes a symbol visible to the linker (exported from the object file). .local label restricts a symbol to the current compilation unit (not visible to other object files). In Rust, functions are .global by default; static variables in a single file can be .local. The assembler emits them in the ELF symbol table with different visibility."
        },
        {
            question: "What are the ARM64 exception levels (EL0–EL3) and what runs at each?",
            answer: "EL0: user-space applications. EL1: OS kernel (Linux runs here). EL2: hypervisor (KVM). EL3: secure monitor (Trusted Firmware). Each level has its own system registers, MMU, and permission set. Lower ELs cannot access higher EL registers. Aarch64 uses the SCR, HCR, and SPSR to control transitions between levels."
        },
        {
            question: "What is the System Control Processor Status Register (SPSR) in AArch64?",
            answer: "SPSR_ELx saves the CPSR of the previous exception level when an exception is taken. It's restored when returning from the exception (ERET). Contains the M[3:0] field (current EL and SP selection), DAIF flags (Debug, SError, IRQ, FIQ mask), and the NZCV condition flags. Each EL has its own SPSR (SPSR_EL1, SPSR_EL2, SPSR_EL3)."
        },
        {
            question: "How does the ARM64 memory model handle cache coherency?",
            answer: "ARMv8 uses a weakly-ordered memory model. Stores are not visible to other cores until a DMB (data memory barrier) or ISB (instruction synchronization barrier) is executed. For cache coherency: DSB (data synchronization barrier) ensures all prior memory operations complete. DC CIVAC cleans a cache line to make it visible to DMA. IC IVAU invalidates the instruction cache after writing code."
        },
        {
            question: "What are DMB, DSB, and ISB barriers in ARM64?",
            answer: "DMB (Data Memory Barrier): orders memory accesses (loads/stores) before/after. DSB (Data Synchronization Barrier): waits until all prior memory operations complete (strongest). ISB (Instruction Synchronization Barrier): flushes the pipeline so subsequent instructions see updated system registers. Use DMB for lock-free code, DSB for DMA completion, ISB after writing to system registers (e.g., TTBR, SCTLR)."
        },
        {
            question: "How does position-independent code (PIC) work in ARM64?",
            answer: "ARM64 is naturally PIC-friendly: ADRP + ADD gives a PC-relative address within ±4GB, so most references need no GOT. For far references (>4GB), use the GOT: ADRP X16, :got:name ; LDR X16, [X16, :got_lo:name] ; LDR X0, [X16]. The linker relaxes ADRP+ADD pairs into a single ADR when possible (linker relaxation)."
        },
        {
            question: "What is ARM linker relaxation and why does it matter?",
            answer: "The ARM64 linker can replace multi-instruction sequences with shorter ones: ADRP+ADD → ADR (if within ±1MB), B + BL → BL (if within range), STP/LDP pair merging. This reduces code size and improves I-cache pressure. Controlled by -Wl,--no-relax to disable. In Rust, enabled by default for AArch64 targets."
        },
        {
            question: "How do you implement a stack canary in ARM64 assembly?",
            answer: "Prologue: LDR X9, [X19, #offset] loads the canary from a per-thread TLS slot. Store it on the stack. Epilogue: LDR X10, [SP, #canary_offset] ; CMP X10, X9 ; B.ne __stack_chk_fail. The canary is a random value (from TLS) that detects buffer overflows before RET. In Rust, enabled by -Zstack-protector=strong (nightly) or the stack_protector crate."
        }
    ];

    localStorage.setItem("flash-cards-arm", JSON.stringify(quizArray));
    if (typeof startTest === "function"){
        startTest();
    }
}   