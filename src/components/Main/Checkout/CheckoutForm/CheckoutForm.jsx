import { useContext, useState } from "react";
import { cartContext } from "../../../../context/CartProvider";

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

        <form className="flex flex-col w-full items-center" onSubmit={handleConfirm}>

            <div className="flex flex-col w-3/4 mb-4">

                <label className="text-xl font-semibold">Nombre
                    <input className="text-lg font-normal mt-1 mb-8 w-full border-b-solid border-b-2 border-b-gray-300" type="text" required value={name} onChange={({ target }) => setName(target.value)}></input>
                </label>

                <label className="text-xl font-semibold">Teléfono
                    <input className="text-lg font-normal mt-1 mb-8 w-full border-b-solid border-b-2 border-b-gray-300" type="number" required value={phone} onChange={({ target }) => setPhone(target.value)}></input>
                </label>

                <label className="text-xl font-semibold">Email
                    <input className="text-lg font-normal mt-1 mb-8 w-full border-b-solid border-b-2 border-b-gray-300" type="email" required value={email} onChange={({ target }) => setEmail(target.value)}></input>
                </label>

            </div>

            <p className="w-full text-center text-xl font-bold">Total: ${totalCost().toLocaleString('es-AR')}</p>
            <button className="bg-secondaryColor w-full rounded text-center text-lg text-alternateSecondary font-semibold p-4 mt-8" type="submit">Crear orden</button>

        </form>

    );

}

export default CheckoutForm;