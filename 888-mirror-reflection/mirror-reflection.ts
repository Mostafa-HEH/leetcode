function mirrorReflection(p: number, q: number): number {
    const divisor = gcd(p, q);
    p /= divisor;
    q /= divisor;

  
    if (p % 2 === 1 && q % 2 === 1) return 1;  
    if (p % 2 === 1) return 0;                 
    return 2;                                 
}

function gcd(a: number, b: number): number {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}