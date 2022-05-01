import "./app-filter.css";

const AppFilter = (props) => {
  const { onUpdateFilter, appFilter } = props;

  const buttonsData = [
    { name: "all", label: "Все сотрудники" },
    { name: "premium", label: "На повышение" },
    { name: "moreThen1000", label: "З/П больше 1000$" },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const classNames = name === appFilter ? "btn btn-light" : "btn btn-outline-light";
    return (
      <button className={classNames} key={name} data-name={name}>
        {label}
      </button>
    );
  });

  

  return (
    <div className="btn-group" onClick={(e) => onUpdateFilter(e.target.dataset.name)}>
      {buttons}
    </div>
  );
};

export default AppFilter;
