import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UsersContainer({userData, fetchUsers}) {
    useEffect(()=>{
        fetchUsers()
    },[])
    return userData?(
    <h2>
      Loading...
    </h2>
  ) : userData.error ?  (
    <h2>{userData.error}</h2>
  ) : (
    <div>
        {userData && 
        userData.users &&
        userData.users.map(user => <p>{user.name}</p>)}
    </div>
  )
}

const mapStateToProps = state => {
    return {
         userData : state.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
         fetchUsers:()=>dispatch(fetchUsers)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer) 
