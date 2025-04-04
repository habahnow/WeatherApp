import { Link } from "react-router-dom";

function BackButton() {
    return <div className="back-cmp"> 
        <Link to="/">Dashboard</Link>
    </div>
}
export default BackButton;