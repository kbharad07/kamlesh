document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
  
    // Get form values
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
  
    if (!date || !description || isNaN(amount)) {
      alert('Please fill all fields correctly.');
      return;
    }
  
    // Add expense to table
    const tableBody = document.querySelector('#expense-table tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${date}</td>
      <td>${description}</td>
      <td>${amount.toFixed(2)}</td>
    `;
    tableBody.appendChild(row);
  
    // Update total expenses
    updateTotal(amount);
  
    // Clear form inputs
    document.getElementById('expense-form').reset();
  });
  
  function updateTotal(amount) {
    const totalElement = document.getElementById('total-expenses');
    const currentTotal = parseFloat(totalElement.textContent);
    const newTotal = currentTotal + amount;
    totalElement.textContent = newTotal.toFixed(2);
  }