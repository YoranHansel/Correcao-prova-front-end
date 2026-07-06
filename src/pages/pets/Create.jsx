import React from 'react';

function Create(params) {
    function registerPets(id) {
        let data = [];

        if (localStorage.getItem("app-pets")) {
            data = JSON.parse(localStorage.getItem("app-pets"));
        } else {
            localStorage.setItem("app-pets", "[]"); 
        }

        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let type = document.getElementById("type").value;

        data.push({ name, age, type, id: params.petId++ });
        params.petIdInc();
        params.setPets(data);

        document.getElementById("input-pet-name").value = "";
        document.getElementById("input-pet-age").value = "";
        document.getElementById("input-pet-type").value = "";
    }

    return (
        <div className="container-cadastro">
            <h2>Cadastrar Pet</h2>
            
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

            <button onClick={() => registerPets(params.id)}>
                Cadastrar
            </button>
        </div>
    );
}

export default Create;