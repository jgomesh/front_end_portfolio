// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const GET_COTATION = 'GET_COTATION';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const SHOW_FORM = 'SHOW_FORM';

// ACTION PARA FAZER O LOGIN
export const loginAction = (email) => ({
  type: USER_LOGIN,
  email,
});
// ACTION PARA PEGAR OS NOMES DE KEYS DISPONIVEIS, USADA NA FUNCAO fetchCurrencies
export const saveCurrencies = (currencies) => ({
  type: SAVE_CURRENCIES,
  currencies: Object.keys(currencies).filter((crr) => crr !== 'USDT'),
});
// ACTION PARA DELETAR UM GASTO ADICIONADO
export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  id,
});
// ACTION TO SHOW EDIT FORM
export const showEditForm = (id) => ({
  type: SHOW_FORM,
  id,
  editor: true,
});
// ACTION QUE EDITA A DESPESA
export const editExpense = (editedExpenses) => ({
  type: EDIT_EXPENSE,
  expenses: editedExpenses,
});
// ACTION PARA PEGAR A COTAÇÂO DA MOEDA USADA NA fetchCotation att
export const getCotation = (exchangeRates, state) => ({
  type: GET_COTATION,
  exchangeRates,
  state,
});

const URL = 'https://economia.awesomeapi.com.br/json/all';
// FUNCTION Q USA O FETCH PARA PEGAR OS NOMES DAS MOEDAS
export function fetchCurrencies() {
  return (dispatch) => {
    fetch(URL)
      .then((response) => response.json())
      .then((currencies) => dispatch(saveCurrencies(currencies)));
  };
}
// FUNCTION Q PEGA A COTAÇÂO ATUAL DA MOEDA
export function fetchCotation(state) {
  return (dispatch) => {
    fetch(URL)
      .then((response) => response.json())
      .then((currencies) => dispatch(getCotation(currencies, state)));
  };
}
