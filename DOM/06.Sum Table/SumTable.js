function sumTable() {
    const elements = document.querySelectorAll('table tr');

    let calc = 0;
    for (let i = 1; i < elements.length - 1; i++) {
        const cols = elements[i].children;
        calc += Number(cols[cols.length - 1].textContent);
    }

    document.getElementById('sum').textContent = calc;
}