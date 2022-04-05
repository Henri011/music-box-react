import React from "react";
import ItemMusica from "../components/ItemMusica";
import Menu from "../components/Menu";

function Musicas() {
    return (

        <>

            <Menu />

            <div className="container">
                <div className="filter">
                    <button className="btn">Adicionar</button>
                </div>
            </div>

            <div className="container">
                <div className="music-boxes">
                    <ItemMusica
                        musica="Vai Rabetão"
                        artista="Mc Lan"
                        genero="Funk"
                        ano={2017}
                        id="1"
                    />

                    <ItemMusica
                        musica="Vai Rabetão"
                        artista="Mc Lan"
                        genero="Funk"
                        ano={2017}
                        id="1"
                    />
                </div>

            </div>




        </>

    );
}

export default Musicas;