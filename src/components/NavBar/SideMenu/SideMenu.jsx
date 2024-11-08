import { Link } from "react-router-dom";
import { useContext } from "react";
import { sideMenuContext } from "../../../context/SideMenuProvider";

function SideMenu() {

    const { visible, open, close } = useContext(sideMenuContext);

    return (

        <div className="flex flex-row w-screen h-screen fixed top-0 left-0">

            <div className="bg-black opacity-30 w-1/2" onClick={close}></div>

            <div className="flex flex-col items-center bg-alternate h-screen w-1/2 fixed top-0 left-1/2 sm:hidden border-l-solid border-l-main border-l-2">

                <i class="fa-solid fa-arrow-right text-center text-3xl mt-8 mb-16 cursor-pointer" onClick={close}></i>

                <div className="flex flex-col justify-between items-center mb-auto">
                    <Link className="text-xl font-semibold mb-4" to="/category/placas" onClick={close}>Placas</Link>
                    <Link className="text-xl font-semibold mb-4" to="/category/perfiles" onClick={close}>Perfiles</Link>
                    <Link className="text-xl font-semibold mb-4" to="/category/accesorios" onClick={close}>Accesorios</Link>
                </div>

                <div className="bg-main text-alternateSecondary w-full p-2">
                    <p className="font-semibold text-center">SteelPoint 2024 ©</p>
                </div>

            </div>

        </div>

    )

}

export default SideMenu;