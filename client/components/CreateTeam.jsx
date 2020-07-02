import React from 'react'

class CreateTeam extends React.Component {
  render () {
    return (
      <>
        <div className="create-box">
          <h2>Create League</h2>
          <form>
            <p>League Name</p>
            <p><input placeholder="Enter League Name"/></p>
            <p><button>Enter</button></p>
          </form>
        </div>
      </>
    )
  }
}

export default CreateTeam
