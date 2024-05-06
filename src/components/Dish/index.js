import './index.css'

const Dish = props => {
  const {dishData} = props

  /*const {
    dishId,
    dishName,
    dishPrice,
    dishImage,
    dishCurrency,
    dishCalories,
    dishDescription,
    dishAvailability,
    dishType,
    nexturl,
    addonCat,
  } = props */

  /*const {addonCategory, addonCategoryId, addonSelection, nexturl, addons} =
    addonCat
  const {
    dishId,
    dishName,
    dishPrice,
    dishImage,
    dishCurrency,
    dishCalories,
    dishDescription,
    dishAvailability,
    dishType,
  } = addons */

  return (
    <ul>
      {dishData.map(each => (
        <li className="dish-item">
          <p>{each.dishName}</p>
        </li>
      ))}
    </ul>
    
  )
}

export default Dish
