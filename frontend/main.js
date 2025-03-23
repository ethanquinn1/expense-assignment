let user = null;
let expenses = [];

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple check for login
    if (username && password) {
        user = { username };
        document.getElementById("user-name").textContent = username;

        // Show expense section, hide login
        document.getElementById("login-section").style.display = "none";
        document.getElementById("expense-section").style.display = "block";

        // Fetch and display expenses from backend
        fetchExpenses();
    } else {
        alert("Please enter both username and password.");
    }
}

function logout() {
    user = null;
    document.getElementById("login-section").style.display = "block";
    document.getElementById("expense-section").style.display = "none";
}

function addExpense() {
    const name = document.getElementById("expense-name").value;
    const amount = document.getElementById("expense-amount").value;

    if (name && amount) {
        const expense = { name, amount };
        expenses.push(expense);
        // Save to backend
        fetch("/expenses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(expense)
        }).then(() => {
            displayExpenses();
        });
    } else {
        alert("Please fill in both fields.");
    }
}

function fetchExpenses() {
    fetch("/expenses")
        .then(response => response.json())
        .then(data => {
            expenses = data;
            displayExpenses();
        });
}

function displayExpenses() {
    const expenseList = document.getElementById("expense-list");
    expenseList.innerHTML = ""; // Clear current list

    expenses.forEach(expense => {
        const li = document.createElement("li");
        li.textContent = `${expense.name} - $${expense.amount}`;
        expenseList.appendChild(li);
    });
}
