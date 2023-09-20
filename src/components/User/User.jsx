import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const User = ({user}) => {
    const {id, name, phone, email} = user
    const userStyle = {
        border: '2px solid black',
        padding: '10px',
        borderRadius: '10px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Phone:{phone}</p>
            <p>Email:{email}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
                <button>Click ME</button>
            </Link>
        </div>
    );
};

export default User;