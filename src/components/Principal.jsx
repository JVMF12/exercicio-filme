import Poster from "/poster.avif"

export default function Principal() {
  return (
    <div className="">
        <h1 className=" mb-7 mt-3 uppercase font-bold text-xl flex items-center justify-center font-poppins">Vingadores: Ultimato</h1>
        <img src={Poster} alt="Imagem da série" className="mb-7 w-1/2 block mx-auto"/>
        <p className="mb-3 mx-1 text-lg font-poppins">Em Vingadores: Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.</p>
        <a href="https://www.disneyplus.com/pt-br/movies/vingadores-endgame/aRbVJUb2h2Rf" className="flex items-center justify-center underline text-lg font-poppins">Assista aqui</a>
    </div>
  )
}
