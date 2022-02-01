import './app-info.css'

const AppInfo = ({allEmpl, awarderedEmpl}) => {
    return (
        <div className="app-info">
            <h1>Accounting employees in the company N</h1>
            <h2>Total number of employees: {allEmpl}</h2>
            <h2>Total number of awards: {awarderedEmpl}</h2>
        </div>
    )
}

export default AppInfo;