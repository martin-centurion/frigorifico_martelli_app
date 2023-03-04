import React from "react";
import "./index.css";
function ItemList ( { users }) {
    return (
        <div className="producto__content">
            {users.map((user) => (
                <div className="producto__content-img" key={user.id}>
                    <img src={user.img} alt={user.title} />
                    <div className="producto__content-title">
                        <h1>{user.title}</h1>
                    </div>
                    <button>Ver más</button>
                </div>
            ))}
        </div>
    )
}

export default ItemList;