import AppInfo from '../app-info/app-info';
import SearchPanel from '../app-search-panel/app-search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../emploees-list/employees-list';
import AddForm from '../employees-add-form/employees-add-form';
// import IAmTest from '../test-app/test-app';

import './app.css';

export default function App(){

    const data = [
        {name:"Мир как воля и представление", rating: 1000, increase: true, id:1},
        {name:"Лучшие сказки армении", rating: 199, increase: false, id:2},
        {name:"Ведьмак", rating: 1000, increase: true, id:3}
    ];

    return (
        <div className="app">
            <AppInfo/>
            <div className="app-search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <AddForm/>
        </div>
    );
}