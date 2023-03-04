import "./index.css";
import { useState, useEffect } from "react";
import products from "../../products/products";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function getItemsFromDatabase() {
    return new Promise((resolve, reject) => {
        let error = false;

        setTimeout(() => {
            if (error === true) reject ("Error leyendo datos");
            resolve(products);
        }, 3000)
    });
}

function getItemsByCategoryFromDatabase(categoryURL) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            let productsFiltered = products.filter(
                (item) => item.category === categoryURL);
                resolve(productsFiltered);
        }, 3000)
    });
}

function ItemListContainer() {

    const [users, setUsers] = useState ([]);

    const params = useParams();
    const idCategory = params.idCategory;

    async function leerDatos() {
        if (idCategory === undefined) {
            let respuesta = await getItemsFromDatabase();
            setUsers(respuesta);
        } else {
            let respuesta = await getItemsByCategoryFromDatabase(idCategory);
            setUsers(respuesta);
        }
    }

    useEffect(() => {
        leerDatos();
    }, [idCategory]);

    return (
        <div className="producto container">
            <ItemList users = { users } />
        </div>
    )
}

export default ItemListContainer;