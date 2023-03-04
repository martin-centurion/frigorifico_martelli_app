import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import products from "../../products/products";

function getSingleItemFromDatabase(idItem) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let encontrado = products.find((item) => item.id === Number(idItem));
            resolve(encontrado);
        }, 1000)
    });
}


function ItemDetailContainer() {
    const [user, setUsers] = useState({});
    
    const params = useParams();
    const idUser = params.idUser;

    useEffect(() => {
        getSingleItemFromDatabase(idUser).then((respuesta) => {
            setUsers(respuesta);
        });
    }, []);

    return (
        <div className="producto">
        <div className="producto__content">
                <div className="producto__content-img" key={user.id}>
                    <img src={user.img} alt={user.title} />
                    <div className="producto__content-title">
                        <h1>{user.title}</h1>
                    </div>
                    <h4>{user.description}</h4>
                    <p>$ {user.price}</p>
                    <button>Agregar al Carrito</button>
                </div>
        </div>
        </div>
    )
}

export default ItemDetailContainer;