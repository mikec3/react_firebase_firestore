import {useEffect, useState} from 'react'
import InputHighscore from './InputHighscore'
import {getHighscore} from './firebase_firestore'

function Highscore() {

const [currentHighscore, setCurrentHighscore] = useState(0);

useEffect(()=> {

	const getData = async () => {
		let result = await getHighscore();
		setCurrentHighscore(result);
	}

	getData();

}, [])

  return (
    <div>
      <h3> Current High Score: {currentHighscore} </h3>
      <InputHighscore/>
    </div>
  );
}

export default Highscore;