const salaryOP = {
    house (bs) {
        return bs * 0.50;
    },
    travel (bs) {
        return bs * 0.30;
    },
    medical (bs) {
        return bs * 0.40;
    },
    dear (bs) {
        return bs * 0.20;
    },
    fund (bs) {
        return bs * 0.05;
    },
    tax (bs) {
        const grosss = salaryOP.gross(bs) * 12;
        if(bs > 1000000) {
            return grosss * 0.30;
        }
        else if(bs > 500000) {
            return grosss * 0.20;
        }
        else if(bs > 250000) {
            return grosss * 0.05;
        }
        else {
            return 0;
        }
    },
    gross (bs) {
        return (salaryOP.house(bs) + salaryOP.travel(bs) + salaryOP.medical(bs) + salaryOP.dear(bs));
    },
    net (bs) {
        return (salaryOP.gross(bs) - salaryOP.fund(bs) - salaryOP.tax(bs));
    }
}


// 2nd Approach using functions
// function house (bs) {
//     return bs * 0.50;
// }
// function travel (bs) {
//     return bs * 0.30;
// }
// function medical (bs) {
//     return bs * 0.40;
// }
// function dear (bs) {
//     return bs * 0.20;
// }
// function fund (bs) {
//     return bs * 0.05;
// }
// function tax (bs) {
//     const grosss = gross(bs) * 12;
//     if(bs > 1000000) {
//         return grosss * 0.30;
//     }
//     else if(bs > 500000) {
//         return grosss * 0.20;
//     }
//     else if(bs > 250000) {
//         return grosss * 0.05;
//     }
//     else {
//         return 0;
//     }
// }
// function gross (bs) {
//     return (house(bs) + travel(bs) + medical(bs) + dear(bs));
// }
// function net (bs) {
//     return (gross(bs) - fund(bs) - tax(bs));
// }