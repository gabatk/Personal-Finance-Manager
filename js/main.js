const body = document.querySelector('body');
const incomeSection = document.querySelector('.income-area');
const expensesSection = document.querySelector('.expenses-area');
const availableMoney = document.querySelector('.options__available-money');
const addTransactionPanel = document.querySelector('.add-transaction__panel');

const nameInput = document.querySelector('#name');
const amountInput = document.querySelector('#amount');
const categorySelect = document.querySelector('#category');

const addTransactionBtn = document.querySelector('.add-transaction');
const deleteAllBtn = document.querySelector('.delete-all');
const deleteBtn = document.querySelector('.delete');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const lightStyle = document.querySelector('.style__color-light');
const darkStyle = document.querySelector('.style__color-dark');

let ID = 0;
let categoryIcon;
let selectedCategory;
let moneyArr = [0];
let transactionType = '';

const openTransactionPanel = () => {
	addTransactionPanel.style.display = 'flex';
};

const closeTransactionPanel = () => {
	addTransactionPanel.style.display = 'none';
	clearInputs();
};

const checkForm = () => {
	if (
		nameInput.value !== '' &&
		amountInput.value !== '' &&
		categorySelect.value !== 'none'
	) {
		createNewTransaction();
	} else {
		alert('You should fill in all the fields.');
	}
};

const clearInputs = () => {
	nameInput.value = '';
	amountInput.value = '';
	categorySelect.selectedIndex = 0;
};

const checkTransactionType = () => {
	if (amountInput.value > 0) {
		transactionType = 'income';
	} else {
		transactionType = 'expense';
	}
};

const createNewTransaction = () => {
	const newTransaction = document.createElement('div');
	newTransaction.classList.add('transaction');
	newTransaction.setAttribute('id', ID);

	checkCategory(selectedCategory);
	checkTransactionType();

	newTransaction.innerHTML = `<p class="transaction__name"> ${categoryIcon} ${nameInput.value}
</p>
<p class="transaction__amount ${transactionType}-amount">
${amountInput.value}zł
<button class="delete" onclick="deleteTransaction(${ID})"><i class="fas fa-times"></i></button>
</p>`;

	if (transactionType === 'income') {
		incomeSection.appendChild(newTransaction);
		newTransaction.classList.add('income');
	} else {
		expensesSection.appendChild(newTransaction);
		newTransaction.classList.add('expense');
	}

	// amountInput.value > 0
	// 	? incomeSection.appendChild(newTransaction) &&
	// 	  newTransaction.classList.add('income-title')
	// 	: expensesSection.appendChild(newTransaction) &&
	// 	  newTransaction.classList.add('expense-title');

	moneyArr.push(parseFloat(amountInput.value));

	countTransactionAmount(moneyArr);
	closeTransactionPanel();
	ID++;
	clearInputs();
};

const selectCategory = () => {
	selectedCategory = categorySelect.options[categorySelect.selectedIndex].text;
};

const checkCategory = transaction => {
	switch (transaction) {
		case '[ + ] Income':
			categoryIcon = '<i class="fas fa-money-bill-wave"></i>';
			break;
		case '[ - ] Shopping':
			categoryIcon = '<i class="fas fa-cart-arrow-down"></i>';
			break;
		case '[ - ] Food':
			categoryIcon = '<i class="fas fa-hamburger"></i>';
			break;
		case '[ - ] Entertainment':
			categoryIcon = '<i class="fas fa-film"></i>';
			break;
	}
};

const countTransactionAmount = money => {
	availableFunds = money.reduce((a, b) => a + b);
	availableMoney.textContent = `${availableFunds}zł`;
};

const deleteTransaction = id => {
	const transactionToDelete = document.getElementById(id);
	const transactionAmount = parseFloat(
		transactionToDelete.childNodes[2].innerText
	);
	const indexOfTransaction = moneyArr.indexOf(transactionAmount);

	moneyArr.splice(indexOfTransaction, 1);

	transactionToDelete.remove();
	countTransactionAmount(moneyArr);
};

const deleteAllTransactions = () => {
	incomeSection.innerHTML =
		'<h3 class="transactions__title income-title">Income:</h3>';
	expensesSection.innerHTML =
		'<h3 class="transactions__title expense-title">Expenses:</h3>';
	availableMoney.textContent = '0zł';
	moneyArr = [0];
};

const handleColorMode = () => {
	if (body.getAttribute('data-mode') === 'light') {
		body.setAttribute('data-mode', 'dark');
	} else {
		body.setAttribute('data-mode', 'light');
	}
};

addTransactionBtn.addEventListener('click', openTransactionPanel);
cancelBtn.addEventListener('click', closeTransactionPanel);
saveBtn.addEventListener('click', checkForm);
deleteAllBtn.addEventListener('click', deleteAllTransactions);
lightStyle.addEventListener('click', handleColorMode);
darkStyle.addEventListener('click', handleColorMode);
