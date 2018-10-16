import React from "react";
import { connect } from "react-redux";
import { addUser } from "./actions/addPersonActions";
import { setName } from "./actions/userActions";
import AddPerson from './containers/AddPerson';
import Filter from './containers/Filter';
class App extends React.Component {
  render() {
    let addPerson = <AddPerson />;
    let filter = <Filter />
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Integration Week End</h1>
        </header>
        {filter}
        {addPerson}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    person: state.person,
    addPersonReducer: state.addPersonReducer
  };
};

const mapDispatchToProps = dispatch => ({
  setName: name => dispatch(setName(name)),
  addUser: person => dispatch(addUser(person)),
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
