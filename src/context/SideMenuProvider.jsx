import { createContext, useState } from "react";

export const sideMenuContext = createContext([]);

function SideMenuProvider({ children }) {

    const [visible, setVisible] = useState(false);

    const open = () => {
        setVisible(true);
    }

    const close = () => {
        setVisible(false);
    }

    return (

        <sideMenuContext.Provider value={{ visible, open, close }}>
            {children}
        </sideMenuContext.Provider>

    );

}

export default SideMenuProvider;