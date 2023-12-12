import './index.css'

const EventItem = props => {
  const {details, updateActiveImg, isActive} = props
  const {id, imageUrl, name, location} = details
  const activeImgClass = isActive ? 'clicked-img' : 'img'

  const onClicked = () => {
    updateActiveImg(id)
  }

  return (
    <div>
      <h1>Events</h1>
      <div className="img-container">
        <img
          className={activeImgClass}
          src={imageUrl}
          onClick={onClicked}
          alt="event"
        />
        <p className="name">{name}</p>
        <p className="location">{location}</p>
      </div>
    </div>
  )
}
export default EventItem
