import { useContext, useState } from "react";
import { cartContext } from "../../../context/CartProvider";

function CheckoutForm({ onConfirm }) {

    const { totalCost } = useContext(cartContext);

    const [name, setName] = useState([]);
    const [phone, setPhone] = useState([]);
    const [email, setEmail] = useState([]);

    const handleConfirm = (event) => {

        event.preventDefault();

        const userData = {
            name, phone, email
        }

        onConfirm(userData);

    }

    return (

        <form onSubmit={handleConfirm}>

            <div className="data">

                <label>Nombre
                    <input type="text" required value={name} onChange={({ target }) => setName(target.value)}></input>
                </label>

                <label>Teléfono
                    <input type="number" required value={phone} onChange={({ target }) => setPhone(target.value)}></input>
                </label>

                <label>Email
                    <input type="email" required value={email} onChange={({ target }) => setEmail(target.value)}></input>
                </label>

            </div>

            <p className="total">Total: ${totalCost()}</p>
            <button className="buy" type="submit">Crear orden</button>

        </form>

    );

}

export default CheckoutForm;