import React, {useState} from 'react';
import Details from './details'



const Button = (props) => {

const [isToggled,setIsToggled] = useState(false)

return(
    <div>
        <button onClick={(() => setIsToggled(!isToggled))}>Details</button>
                        { isToggled && <Details indivPuppy={props.indivPuppy}/>}
    </div>
    )
}

export default Button