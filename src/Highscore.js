import {useEffect, useState} from 'react'
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

const handleFormSubmission = async (event) => {
	event.preventDefault();
	let result = await uploadHighscore(event.target.newScore.value);
	setCurrentHighscore(event.target.newScore.value);
}

  return (
    <div>
      	<h3> Current High Score: {currentHighscore} </h3>
		<form onSubmit={handleFormSubmission}> <h3> Next High Score: </h3>
		<input style={{width: '150px'}} type="number" id="newScore" placeholder={0} />
		<button type="Submit"> Submit </button>
		</form>
    </div>
  );
}

export default Highscore;