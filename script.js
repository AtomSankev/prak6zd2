document.getElementById('verifyBtn').addEventListener('click', verifyTruthTable);

function verifyTruthTable() {
    const logicElement = document.getElementById('logicElement').value;
    const truthTable = [
        {x1: 0, x2: 0, y: 1},
        {x1: 0, x2: 1, y: 0},
        {x1: 1, x2: 0, y: 0},
        {x1: 1, x2: 1, y: 0}
    ];

    let isCorrect = true;

    for (const row of truthTable) {
        let calculatedY;
        switch (logicElement) {
            case 'I': // AND
                calculatedY = row.x1 && row.x2;
                break;
            case 'ABO': // OR
                calculatedY = row.x1 || row.x2;
                break;
            case 'XOR': // XOR
                calculatedY = row.x1 ^ row.x2;
                break;
            case 'NOR': // NOR
                calculatedY = !(row.x1 || row.x2);
                break;
            case 'NAND': // NAND
                calculatedY = !(row.x1 && row.x2);
                break;
            case 'XNOR': // XNOR
                calculatedY = !(row.x1 ^ row.x2);
                break;
        }

        if (calculatedY != row.y) {
            isCorrect = false;
            break;
        }
    }

    if (isCorrect) {
        alert('Правильна відповідь!');
    } else {
        alert('Неправильна відповідь!');
    }
}
