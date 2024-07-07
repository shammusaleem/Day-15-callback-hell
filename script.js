document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const food = [];
        formData.getAll('food').forEach(item => food.push(item));

        if (food.length < 2) {
            alert('Please select at least 2 food options');
            return;
        }

        const row = dataTable.insertRow();
        row.insertCell(0).textContent = formData.get('firstName');
        row.insertCell(1).textContent = formData.get('lastName');
        row.insertCell(2).textContent = formData.get('email');
        row.insertCell(3).textContent = formData.get('address');
        row.insertCell(4).textContent = formData.get('pincode');
        row.insertCell(5).textContent = formData.get('gender');
        row.insertCell(6).textContent = food.join(', ');
        row.insertCell(7).textContent = formData.get('state');
        row.insertCell(8).textContent = formData.get('country');

        form.reset();
    });
});
