import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import Button from './components/button';

const PuppyDex = () => {

    const [puppy, setPuppy] = useState([])

    useEffect(() => {
        
        async function fetchPuppyData () {
            try{
                const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-mt-web-ft/players")
                const info = await response.json();

                console.log(info.data.players)
                setPuppy(info.data.players)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPuppyData();
    },[])

    

    return (
        <div>

            <div className='wrapContainer'>
                {puppy && puppy.length ? puppy.map((indivPuppy, idx) => {
                        
                        console.log(indivPuppy)
                        return     <div className="graphicContainer" key={idx}>
                        <p className='puppyId'>id: <span className='idNum'>#{indivPuppy.id}</span></p>
                        <p className='puppyName'>{indivPuppy.name}</p>
                        <img className='puppyImage'src={indivPuppy.imageUrl}/>
                        <Button indivPuppy={indivPuppy} idx={idx}/>
                    </div>
                    }): <div>Puppies not currently available.</div>
                }
            </div>

        </div>
    )


}

const appElement = document.getElementById('app')
ReactDOM.render(<PuppyDex />, appElement)