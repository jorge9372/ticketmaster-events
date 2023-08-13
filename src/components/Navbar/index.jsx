import { useState, useEffect } from "react";

const Navbar = ({ onSearch }) => {
    const [search, setSearch] = useState('');

    useEffect(() => { console.log('onSearch cambio') }, [onSearch]);

    useEffect(()=>{console.log('componente listo')},[]);

    useEffect(()=>{console.log('search cambio')},[search]);




    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };
    const handleInputKeyDawn = (evt) => {
        if (evt.key === 'Enter') {
            onSearch(search);
        };
    };

    return (
        <div>
            <p>Mi boletera</p>
            <input
                placeholder="Busca tu evento favorito"
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDawn}
                value={search}
            />
        </div>
    );
};

export default Navbar;

