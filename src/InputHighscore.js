

function InputHighscore() {

  return (
    <div>
      <form> <h3> Next High Score: </h3>
      <input style={{width: '150px'}} type="number" value={0} onChange={()=>{}}/>
      <button> Submit </button>
      
      </form>
    </div>
  );
}

export default InputHighscore;