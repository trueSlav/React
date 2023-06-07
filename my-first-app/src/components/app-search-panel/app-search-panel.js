

import './app-search-panel.css';

export default function SearchPanel(){
    return (
        <div className="input-group flex-nowrap">
            {/* <span class="input-group-text" id="addon-wrapping"></span> */}
            <input 
                type="text" 
                className="form-control search-input" 
                placeholder="Найти книгу" 
                aria-label="Найти книгу" 
                aria-describedby="addon-wrapping"/>
        </div>
    );
}