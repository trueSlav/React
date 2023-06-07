

import './employees-add-form.css'

export default function AddForm(){
    return(
        <div className="app-add-form">
            <h3>Добавьте новую книгу</h3>
            <form
                className="add-form d-flex justifu-content-between">
                <input type="text"
                    className="form-control new-post-label f1"
                    placeholder="Название книги" />
                <input type="number"
                    className="form-control new-post-label f1"
                    placeholder="Оценка книги по книгликам?" />

                <button type="submit"
                        className="btn btn-primary">Добавить</button>
            </form>
        </div>
    );
}