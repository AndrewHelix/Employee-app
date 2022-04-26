import './app-info.css';

const AppInfo = ({employees, countPremium}) => {
  
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании Company</h1>
      <h2>Общее число сотрудников: {employees}</h2>
      <h2>Премию получат: {countPremium}</h2>
    </div>
  )
}

export default AppInfo;