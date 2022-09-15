function createCalculator(val){
    return {
        add: (b) => (val = val + b),
        sub: (b) => (val = val - b),
        div: (b) => (val = val / b),
        mult: (b) => (val = val * b),
        set: (b) => (val = b),
    };
}