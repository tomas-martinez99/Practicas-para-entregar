
import PropTypes  from 'prop-types'

const Filter = ({nameMovie}) => {
  return (
    <h1>{nameMovie}</h1>
  )
}
Filter.propTypes ={
    nameMovie : PropTypes.string,
}

export default Filter