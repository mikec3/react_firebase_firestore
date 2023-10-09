

function InputHighscore(props) {

	const handleFormSubmission = (event) => {
		event.preventDefault();
		props.passUpNewScore(event.target.newScore.value)
	}

  return (
    <div>
      <form onSubmit={handleFormSubmission}> <h3> Next High Score: </h3>
      <input style={{width: '150px'}} type="number" id="newScore" placeholder={0} />
      <button type="Submit"> Submit </button>
      
      </form>
    </div>
  );
}

export default InputHighscore;