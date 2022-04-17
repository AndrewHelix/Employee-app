import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({ data }) => {
  const users = data.map((el) => {
    const { id, ...otherProps } = el;
    return <EmployeesListItem key={id} {...otherProps} />;
  });

  return <ul className="app-list list-group">{users}</ul>;
};

export default EmployeesList;
