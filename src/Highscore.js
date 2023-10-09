import {useEffect, useState} from 'react'
import InputHighscore from './InputHighscore'
import {getHighscore, uploadHighscore} from './firebase_firestore'

function Highscore() {

const [currentHighscore, setCurrentHighscore] = useState(0);

useEffect(()=> {

	const getData = async () => {
		let result = await getHighscore();
		setCurrentHighscore(result);
	}

	getData();

}, [])

const handleNewScore = async (newScore) => {
	let result = await uploadHighscore(newScore);
	setCurrentHighscore(result);
}

  return (
    <div>
      <h3> Current High Score: {currentHighscore} </h3>
      <InputHighscore passUpNewScore={handleNewScore}/>
    </div>
  );
}

export default Highscore;