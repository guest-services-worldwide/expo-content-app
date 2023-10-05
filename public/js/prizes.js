// const prizes = [];
//
// prizes[1] = {'brand': 'Chill', 'product':'Zero',};
// prizes[2] = {'brand': 'Chill', 'product':'Zero',};
// prizes[3] = {'brand': 'Chill', 'product':'Zero',};
// prizes[4] = {'brand': 'Chill', 'product':'Zero',};
// prizes[5] = {'brand': 'Chill', 'product':'Zero',};
// prizes[6] = {'brand': 'Chill', 'product':'Zero',};
// prizes[7] = {'brand': 'Chill', 'product':'Zero',};
// prizes[8] = {'brand': 'Chill', 'product':'Zero',};
// prizes[9] = {'brand': 'Chill', 'product':'Zero',};
// prizes[10] = {'brand': 'Chill', 'product':'Zero',};
// prizes[11] = {'brand': 'Chill', 'product':'Zero',};
// prizes[12] = {'brand': 'Chill', 'product':'Zero',};
// prizes[13] = {'brand': 'Chill', 'product':'Zero',};
// prizes[14] = {'brand': 'Chill', 'product':'Zero',};
// prizes[15] = {'brand': 'Chill', 'product':'Zero',};
// prizes[16] = {'brand': 'Chill', 'product':'Zero',};
// prizes[17] = {'brand': 'Chill', 'product':'Zero',};
// prizes[18] = {'brand': 'Chill', 'product':'Zero',};
// prizes[19] = {'brand': 'Chill', 'product':'Zero',};
// prizes[20] = {'brand': 'Chill', 'product':'Zero',};
// prizes[21] = {'brand': 'Chill', 'product':'Zero',};
// prizes[22] = {'brand': 'Chill', 'product':'Zero',};
// prizes[23] = {'brand': 'Chill', 'product':'Zero',};
// prizes[24] = {'brand': 'Chill', 'product':'Zero',};
// prizes[25] = {'brand': 'Chill', 'product':'Zero',};
// prizes[26] = {'brand': 'Chill', 'product':'Zero',};
// prizes[27] = {'brand': 'Chill', 'product':'Zero',};
// prizes[28] = {'brand': 'Chill', 'product':'Zero',};
// prizes[29] = {'brand': 'Chill', 'product':'Zero',};
// prizes[30] = {'brand': 'Chill', 'product':'Zero',};
// prizes[31] = {'brand': 'Chill', 'product':'Zero',};
// prizes[32] = {'brand': 'Chill', 'product':'Zero',};
// prizes[33] = {'brand': 'Chill', 'product':'Zero',};
// prizes[34] = {'brand': 'Chill', 'product':'Zero',};
// prizes[35] = {'brand': 'Chill', 'product':'Zero',};
// prizes[36] = {'brand': 'Chill', 'product':'Zero',};

function prize(number) {

    if (number >= 1 && number <= 8) {
        return '£50';
    }

    if (number >= 9 && number <= 16) {
        return '£100';
    }

    if (number >= 17 && number <= 24) {
        return '£150';
    }

    if (number >= 25 && number <= 32) {
        return '£200';
    }

    if (number >= 33 && number <= 36) {
        return 'Double Money!';
    }

    if (number === 0) {
        return 'Top Prize!';
    }
}