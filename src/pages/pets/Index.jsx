import { useEffect } from "react";
import { Link } from 'react-router-dom';

function PetsIndex({ pets, setPets, deletePet }) {
    function listPets() {
        let data = [];
        const localData = localStorage.getItem('app-pets');

        if (localData) {
            data = JSON.parse(localData);
        } else {
            localStorage.setItem("app-pets", "[]");
        }

        if (setPets) setPets(data);
    }

    // deletion handled via `deletePet` prop passed from App.jsx

    useEffect(listPets, []);

    return (
        <>
            <Link to="/pet">Cadastrar Pet</Link>
            <table>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Idade</td>
                        <td>Tipo</td>
                    </tr>
                </thead>
                <tbody>
                    {pets && pets.map((value) => {
                        return (
                            <tr key={value.id ?? value.name}>
                                <td>{value.name}</td>
                                <td>{value.age}</td>
                                <td>{value.type}</td>
                                <td><Link to={`/pet/${value.id}`}>Ver</Link></td>
                                <td><Link to={`/pet/${value.id}/edit`}>Editar</Link></td>
                                <td><button onClick={() => deletePet && deletePet(value.id)}>Excluir</button></td>
                            </tr>
                        );
                    })} 
                </tbody>
            </table>
        </>
    );
}

export default PetsIndex;