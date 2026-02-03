const Notification = props => {
  const {iconUrl, text, className} = props
  return (
    <div className={`notification ${className}`}>
      <img src={iconUrl} className='icon' alt='icon' />
      <p className='message'>{text}</p>
    </div>
  )
}

const element = (
  <div className='app-container'>
    <h1 className='heading'>Notifications</h1>
    <Notification
      iconUrl='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      text='Information Message'
      className='primary'
    />
    <Notification
      iconUrl='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      text='Success Message'
      className='success'
    />
    <Notification
      iconUrl='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      text='Warning Message'
      className='warning'
    />
    <Notification
      iconUrl='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      text='Error Message'
      className='danger'
    />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
