import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux'

function HooksIceCreamContainer() {
    // similar to mapStateToProps
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)

    // similar to mapDispatchToProps
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Num of iceCreams - {numOfIceCreams}</h2>
      <button onClick={()=>dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  )
}

export default HooksIceCreamContainer
