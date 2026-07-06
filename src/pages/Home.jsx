import { Link } from "react-router-dom";

function Home(){
   return <>
     <h1>Lorem</h1>
     <p>Lorem ipsum</p>

     <h3>Motivo da adoção</h3>
     <p>Lorem ipsum</p>

     <Link to="/pets">Ir para pets</Link>
   </>
}

export default Home