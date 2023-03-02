const ItemEdit = () =>{

    return(
        <div className="item-edit-container">
            <input className="edit-input" placeholder="Coat"/>
            <input className="edit-input" placeholder="Color"/>
            <input className="edit-input" placeholder="Size"/>
            <input className="edit-input" placeholder="Stock"/>
            <div className="s-e-d-buttons-container">
                <button className="s-e-d-buttons">save</button>
                <button className="s-e-d-buttons">delete</button>
                <button className="s-e-d-buttons">cancel</button>
            </div>
    </div>

    )
}

export default ItemEdit