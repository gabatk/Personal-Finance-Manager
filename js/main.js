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
