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
      search: '',
      filter: 'all'
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

  searchEmployee = (data, searchStr) => {
    if (searchStr.length === 0) {
      return data
    }

    return data.filter(el => el.name.toLowerCase().indexOf(searchStr.toLowerCase()) > -1) 
  }

  onUpdateSearch = (search) => {
    this.setState({search})
  }

  filterData = (data, filter) => {
    switch (filter) {
      case 'premium': {
        return data.filter(el => el.premium)
      }
      case 'moreThen1000': {
        return data.filter(el => el.salary > 1000)
      }
      default: {
        return data;
      }
    }
  }

  onUpdateFilter = (filter) => {
    this.setState({filter})
  }

  render() {
    const {data, search, filter} = this.state;
    const countPremium = this.state.data.filter(item => item.increase).length;
    const employees = this.state.data.length;
    const visibleData = this.filterData(this.searchEmployee(data, search), filter)
    
    return (
      <div className="app">
        <AppInfo employees={employees} countPremium={countPremium}/>
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter onUpdateFilter={this.onUpdateFilter} appFilter={filter}/>
        </div>
        <EmployeesList 
          data={visibleData} 
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp} />
        <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
