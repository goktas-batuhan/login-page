import "./Success.css"
import { useNavigate } from "react-router";

function Success() {

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/")
  }
  return (
    <div className="all-succes-page">
      <div className="congratz">
        <h1>
          Congratulations! You succesfully logined.
        </h1>
        <div className="return-batın">
          <button onClick={handleClick}>Return Login Page</button>
        </div>

      </div>
    </div>
  )


}

export default Success
