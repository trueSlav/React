import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css'

export default function EmployeesList({data}){

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem key={id} {...itemProps}/>
        );
    });

    return(
        <ul className="list-group list-group-flush">
            {elements} 
        </ul>
    );
}