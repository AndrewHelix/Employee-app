import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  onUpdateSearch = (e) => {
    this.setState({ search: e.target.value });
    this.props.onUpdateSearch(e.target.value)
  };

  render() {
    return (
      <input
        type="text"
        className="search-text"
        placeholder="Найти сотрудника"
        value={this.state.value}
        onChange={this.onUpdateSearch}
      />
    );
  }
}

export default SearchPanel;
