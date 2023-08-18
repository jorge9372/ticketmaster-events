import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
    const [search, setSearch] = useState('');

    useEffect(() => { console.log('onSearch cambio') }, [onSearch]);

    useEffect(() => { console.log('componente listo') }, []);

    useEffect(() => { console.log('search cambio') }, [search]);

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };
    const handleInputKeyDawn = (evt) => {
        if (evt.key === 'Enter') {
            onSearch(search);
        };
    };

    return (
        <div style={{
            marginBottom: 14,
            width: '100%',
            display: 'flex',
        }}>
            <div style={{ flex: 1, display: 'flex' }}>
                <p style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                }}>Mi boletera</p>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <input
                    placeholder="Busca tu evento favorito"
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDawn}
                    value={search}
                    style={{
                        fontSize: 16,
                        borderRadius: 4,
                        padding: '6px 12px',
                        border: 'none',
                        width: 200,
                    }}
                />
                <Link to="/profile/my-info" style={{
                    marginLeft: 24,
                    color: '#fff',
                    textDecoration: 'none'
                }}>Mi perfil</Link>
            </div>
        </div>
    );
};

export default Navbar;

