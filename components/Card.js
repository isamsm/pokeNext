import Image from "next/image";
import Link from "next/link";

import styles from '../styles/PokemonsCard.module.css'

export default function Card({ pokemon }) {
  return (
    <>
        <div className={styles.pokemoncard}>
            <Image loader={() => `https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} width="120" height="120" alt={pokemon.name}/>
            <p> #{pokemon.id} </p>
            <h3> {pokemon.name} </h3>
            <Link href={`/pokemon/${pokemon.id}`}>
                <a> Detalhes </a>
            </Link>
        </div>
    </>
    )
}