import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Create({ setPets }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = id != null;

    useEffect(() => {
        if (!isEditing) return;
        const stored = localStorage.getItem('app-pets');
        if (!stored) return;
        try {
            const data = JSON.parse(stored);
            const pet = data.find(p => String(p.id) === String(id));
            if (pet) {
                const nameEl = document.getElementById('name');
                const ageEl = document.getElementById('age');
                const typeEl = document.getElementById('type');
                if (nameEl) nameEl.value = pet.name || '';
                if (ageEl) ageEl.value = pet.age || '';
                if (typeEl) typeEl.value = pet.type || 'Cachorro';
            }
        } catch (e) {
            console.error('Failed to parse app-pets', e);
        }
    }, [id]);

    function registerPets() {
        let data = [];
        const stored = localStorage.getItem('app-pets');
        if (stored) data = JSON.parse(stored);

        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const type = document.getElementById('type').value;

        if (isEditing) {
            const updated = data.map(p => (String(p.id) === String(id) ? { ...p, name, age, type } : p));
            localStorage.setItem('app-pets', JSON.stringify(updated));
            setPets && setPets(updated);
            navigate('/pets');
            return;
        }

        const nextId = data.reduce((m, p) => Math.max(m, p.id ?? 0), 0) + 1;
        const newPet = { name, age, type, id: nextId };
        data.push(newPet);
        localStorage.setItem('app-pets', JSON.stringify(data));
        setPets && setPets(data);

        const nameEl = document.getElementById('name');
        const ageEl = document.getElementById('age');
        const typeEl = document.getElementById('type');
        if (nameEl) nameEl.value = '';
        if (ageEl) ageEl.value = '';
        if (typeEl) typeEl.value = 'Cachorro';

        navigate('/pets');
    }

    return (
        <div className="container-cadastro">
            <h2>{isEditing ? 'Editar Pet' : 'Cadastrar Pet'}</h2>

            <label htmlFor="name">Nome</label>
            <input type="text" id="name" />

            <label htmlFor="age">Idade</label>
            <input type="number" id="age" />

            <label htmlFor="type">Espécie</label>
            <select id="type">
                <option value="Cachorro">Cachorro</option>
                <option value="Gato">Gato</option>
                <option value="Pássaro">Pássaro</option>
                <option value="Hipopótamo">Hipopótamo</option>
                <option value="Lampréia">Lampréia</option>
            </select>

            <button onClick={registerPets}>{isEditing ? 'Salvar' : 'Cadastrar'}</button>
        </div>
    );
}

export default Create;