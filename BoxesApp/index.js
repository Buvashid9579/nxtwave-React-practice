const Box = props => {
  const {className, text} = props
  return <div className={`box ${className}`}>{text}</div>
}

const element = (
  <div className='app-container'>
    <h1 className='heading'>Boxes</h1>
    <div className='boxes-container'>
      <Box className='box-small' text='Small' />
      <Box className='box-medium' text='Medium' />
      <Box className='box-large' text='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
