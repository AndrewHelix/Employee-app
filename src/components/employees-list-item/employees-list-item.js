import "./employees-list-item.css";
import { Component } from "react";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      premium: false,
    }
  }

  onIncrease = () => {
    this.setState(({increase}) => ({
      increase: !increase
    }))
  }

  onPremium = () => {
    this.setState(state => ({
      premium: !state.premium
    }))
  }

  render() {
    const { name, salary } = this.props;

    let classNames = "list-group-item d-flex justify-content-between";
    if (this.state.increase) {
      classNames += " increase";
    }

    if(this.state.premium) {
      classNames += ' like'
    }

    return (
      <li className={classNames}>
        <span className="list-group-item-label" onClick={this.onPremium}>{name}</span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + "$"}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button 
            type="button" 
            className="btn-cookie btn-sm "
            onClick={this.onIncrease}>
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button" className="btn-trash btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
