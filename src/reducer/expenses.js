const emptyState = [];

export default (state=emptyState, {type, payload}) => {
  switch(type){
    case 'EXPENSE_CREATE':
      return [...state, {...payload}];
    case 'EXPENSE_DESTROY':
      return state.filter(expense => expense.id !== payload);
    case 'EXPENSE_DRAG':
      let newState = [...state];
      if(payload.newCategoryID === '') return state;
      state.map((expense, i) => {
        if(state[i].id === payload.expenseID) newState[i].categoryID = payload.newCategoryID;
      });
      return newState;
    default:
      return state;
  }
}
