

import './employees-list-item.css'

export default function EmployeesListItem({name, rating, increase}){

    let classNames = "list-group-item d-flex justifu-content-between";

    if(increase){
        classNames += ' increase';
    }

    return(
        <li className={classNames}>

            <span className="list-group-item-label">{name}</span>

            <input type="text" className="list-group-item-input" defaultValue={rating}/>
            <div className="d-flex justifu-content-center align-items-center">
                <button type="button"
                    className="btn-cookie btn-sm">
                        <i className="fas fa-cookie"></i>
                </button>
                <button type="button"
                    className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}
