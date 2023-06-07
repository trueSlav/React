

import './app-filter.css'

export default function AppFilter(){
    return(
        <div className="btn-group app-filter">
            <button 
            type="button" 
            className="btn btn-primary">
                Все книги
            </button>
            
            <button 
            type="button" 
            className="btn btn-outline-dark">
                На перепрочтение
            </button>
            
            <button 
            type="button" 
            className="btn btn-outline-dark">
                Рейтинг больше 1000
            </button>
        </div>
    );
}