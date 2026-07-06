import { useParams, useNavigate } from "react-router-dom";

function Show({ pets, deletePet }){
    const { id } = useParams();
    const navigate = useNavigate();

    const pet = pets ? pets.find(p => String(p.id) === String(id)) || {} : {};

    function handleDelete(){
        if(deletePet && pet.id != null){
            deletePet(pet.id);
            navigate('/pets');
        }
    }

    function handleEdit(){
        if(pet.id != null) navigate(`/pet/${pet.id}/edit`);
    }

    return (
        <>
         <section id="center">
            <h3>{pet.name}</h3>
            <p>Código: {pet.id}</p>
            <p>Idade: {pet.age}</p>
            <p>Espécie: {pet.type}</p>
            <button onClick={handleEdit}>Editar</button>
            <button onClick={handleDelete}>Excluir</button>
         </section>
        </>
    )
}

export default Show