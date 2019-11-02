import * as React from 'react';
import { connect } from 'react-redux';
import { exampleAction } from '../actions/actions';

/**
 * Gave store and dispatch types of any because I don't know what their types are
 */
const mapStateToProps = (store: any) => ({
  store: store
});

const mapDispatchToProps = (dispatch: any) => ({
  exampleAction: (name: string) => dispatch(exampleAction(name))
});

interface AppProps {
  exampleAction: (name: string) => object;
};

interface AppState {
  nameEntry: string;
};

class App extends React.Component<AppProps, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      nameEntry: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event: any) {
    event.preventDefault();
    this.props.exampleAction(this.state.nameEntry);
    this.setState({
      nameEntry: ""
    });
  }

  handleChange(event: any) {
    event.preventDefault();
    this.setState({
      nameEntry: event.target.value
    });
  }

  render() {
    const props: any = this.props;
    const name = props.store.nameReducer.name
    return (
      <div>
        <div>Hello {name}</div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.nameEntry} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
