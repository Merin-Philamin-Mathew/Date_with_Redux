import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function CakeContainer(props) {
  return (
    <div>
      <div>num of cakes - {props.numOfCakes}</div>
      <button onClick={props.buyCake}>buy cake</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfCakes : state.numOfCakes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCake: ()=> dispatch(buyCake())
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)


// import React from 'react'
// import { buyCake } from '../redux'
// import { connect } from 'react-redux'

// function CakeContainer(props) {
//   return (
//     <div>
//       <div>num of cakes -sda {props}{props.numOfCakes}</div>
//       <button onClick={props.mapStateToProps}>buy cake</button>
//     </div>
//   )
// }



// export default connect(mapDispatchToProps, mapStateToProps)(CakeContainer)
