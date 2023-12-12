// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {theImageStatus} = props

  switch (theImageStatus) {
    case 'YET_TO_REGISTER':
      return (
        <img
          className="image"
          alt="yet to register"
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        />
      )

    case 'REGISTERED':
      return (
        <img
          className="image"
          alt="registered"
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        />
      )

    case 'REGISTRATIONS_CLOSED':
      return (
        <img
          className="image"
          alt="registrations closed"
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        />
      )

    default:
      return <p>Click on an event to view its registration details</p>
  }
}
export default ActiveEventRegistrationDetails
