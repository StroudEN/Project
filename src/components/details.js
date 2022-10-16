import React from "react";

const Details = (props) => {
    return(
        <div className="horizontalContainer" >
        <p className="puppyId info">Breed: <span className='idNum'>{props.indivPuppy.breed}</span></p>
        <p className="puppyId info">Position: <span className='idNum'>{props.indivPuppy.status}</span></p>
        <p className="puppyId info">Team: <span className='idNum'>{props.indivPuppy.teamId}</span></p>
    </div>
    )
}

export default Details