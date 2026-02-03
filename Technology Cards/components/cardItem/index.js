// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`card-item ${className}`}>
      <h1 className="card-title">{title}</h1>
      <p className=" cards-description">{description}</p>
      <img src={imgUrl} alt={title} className="card-image" />
    </li>
  )
}

export default CardItem
