document.addEventListener('DOMContentLoaded', () => {
    
    const tableData = [
        ["ID", "Name", "Age", "Email", "Phone No"]
    ];

    
    function addRow() {
        const id = document.getElementById('idInput').value.trim();
        const name = document.getElementById('nameInput').value.trim();
        const age = document.getElementById('ageInput').value.trim();
        const email = document.getElementById('emailInput').value.trim();
        const phone = document.getElementById('phoneInput').value.trim();

        
        if (!id || !name || !age || !email || !phone) {
            alert('Please fill in all fields.');
            return;
        }

        
        tableData.push([id, name, age, email, phone]);

        document.getElementById('idInput').value = '';
        document.getElementById('nameInput').value = '';
        document.getElementById('ageInput').value = '';
        document.getElementById('emailInput').value = '';
        document.getElementById('phoneInput').value = '';

        updateTable();
    }
    function updateTable() {
        let tableBody = document.querySelector('#dataTable tbody');

        
        if (!tableBody) {
            const table = document.getElementById('dataTable');
            tableBody = document.createElement('tbody');
            table.appendChild(tableBody);
        } else {
           
            tableBody.innerHTML = '';
        }

        
        tableData.forEach((rowData, rowIndex) => {
            const row = document.createElement('tr');
            rowData.forEach((cellData, cellIndex) => {
                const cell = document.createElement(rowIndex === 0 ? 'th' : 'td');
                cell.textContent = cellData;
                row.appendChild(cell);
            });
            tableBody.appendChild(row);
        });
    }

    
    document.getElementById('addRowBtn').addEventListener('click', addRow);

    updateTable();
});
