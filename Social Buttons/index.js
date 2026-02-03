const Button = props => {
  const {className, text} = props
  return <button className={className}>{text}</button>
}

const element = (
  <div className='app-container'>
    <h1 className='heading'>Social Buttons </h1>
    <div className='buttons-container'>
      <button className='like-button' text='Like' />
      <button className='comment-button' text='Comment' />
      <button className='share-button' text='Share' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
