import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import { Component } from "react";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Andrew S.", salary: 800, increase: false, premium: false, id: 1 },
        { name: "Eugen M.", salary: 300, increase: false, premium: false, id: 2 },
        { name: "Oleg D.", salary: 2500, increase: false, premium: false, id: 3 },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((element) => element.id !== id),
    }));
  };

  addItem = (item) => {
    this.setState(({data}) => ({
      data: [...data, {
        ...item,
        increase: false,
        premium: false,
        id: Date.now()
      }]
    }))
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => item.id === id ? {...item, [prop]: !item[prop]} : item)
    }))
  }

  render() {
    const countPremium = this.state.data.filter(item => item.premium).length;
    const employees = this.state.data.length;

    return (
      <div className="app">
        <AppInfo employees={employees} countPremium={countPremium}/>
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList 
          data={this.state.data} 
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp} />
        <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
