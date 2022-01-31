import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employess-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [
        {name: "John C.", salary: 800, id: 1},
        {name: "Daniel H.", salary: 3000, id: 2},
        {name: "Skitr O.", salary: 5000, id: 3}
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App;