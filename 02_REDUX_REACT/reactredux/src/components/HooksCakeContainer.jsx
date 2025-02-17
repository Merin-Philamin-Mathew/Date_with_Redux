import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    // similar to mapStateToProps
    const numOfCakes = useSelector(state => state.cake.numOfCakes)

    // similar to mapDispatchToProps
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Num of cakes - {numOfCakes}</h2>
      <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer
