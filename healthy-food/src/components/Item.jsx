const Item = ({propFoodItem,bought,handleOnClick}) => {
    return <>
        <li className={`list-group-item ${bought && 'active'}`}>{propFoodItem}
            <button className="btn btn-info" style={{'float':'right'}} onClick={handleOnClick}>Buy</button>
        </li>
    </>
}
export default Item;