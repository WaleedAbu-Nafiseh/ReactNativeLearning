//To use a reducer we need data, action call reducer which changes the state that will be  rendered on the component
import people from './people.json';
const initialState = {
  people,
};
export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
