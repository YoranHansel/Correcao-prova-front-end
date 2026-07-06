import { useEffect } from "react";
import { Link } from 'react-router-dom';

function PetsIndex(params) {
    function listPets() {
        let data = [];
        const localData = localStorage.getItem('app-pets');

        if (localData) {
            data = JSON.parse(localData);
        } else {
            localStorage.setItem("app-pets", "[]");
        }

        params.setPets(data);
    }

    useEffect(listPets, []);

    return (
        <>
            <Link to="/pet">Cadastra Pet</Link>
            <table>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Idade</td>
                        <td>Tipo</td>
                    </tr>
                </thead>
                <tbody>
                    {params.pet && params.pet.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{value.name}</td>
                                <td>{value.age}</td>
                                <td>{value.type}</td>
                            </tr>
                        );
                    })} 
                </tbody>
            </table>
        </>
    );
}

export default PetsIndex;