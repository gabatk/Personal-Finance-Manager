const incomeSection = document.querySelector('.income-area');
const expensesSection = document.querySelector('.expenses-area');
const availableMoney = document.querySelector('.options__available-money');
const addTransactionPanel = document.querySelector('.add-transaction__panel');

const NameInput = document.querySelector('#name');
const AmountInput = document.querySelector('#amount');
const CategorySelect = document.querySelector('#category');

const addTransactionBtn = document.querySelector('.add-transaction');
const deleteAllBtn = document.querySelector('.delete-all');
const deleteBtn = document.querySelector('.delete');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const lightStyle = document.querySelector('.style__color-light');
const darkStyle = document.querySelector('.style__color-dark');

let root = document.documentElement;
let ID = 0;
let categoryIcon;
let selectedCategory;
let moneyArr = [0];

const openTransactionPanel = () => {
	addTransactionPanel.style.display = 'flex';
};

const closeTransactionPanel = () => {
	addTransactionPanel.style.display = 'none';
	NameInput.value = '';
	AmountInput.value = '';
	CategorySelect.selectedIndex = 0;
};

const addTransaction = () => {
	if (
		NameInput.value !== '' &&
		AmountInput.value !== '' &&
		CategorySelect.selectedIndex !== 0
	) {
		addTransactionPanel.style.display = 'none';
	}
};

addTransactionBtn.addEventListener('click', openTransactionPanel);
cancelBtn.addEventListener('click', closeTransactionPanel);
saveBtn.addEventListener('click', addTransaction);

lightStyle.addEventListener('click', () => {
	root.style.setProperty('--first-color', '#f9f9f9');
	root.style.setProperty('--second-color', '#14161f');
	root.style.setProperty('--border-color', 'rgba(0, 0, 0, 0.2)');
});

darkStyle.addEventListener('click', () => {
	root.style.setProperty('--first-color', '#14161f');
	root.style.setProperty('--second-color', '#f9f9f9');
	root.style.setProperty('--border-color', 'rgba(255, 255, 255, 0.2)');
});
