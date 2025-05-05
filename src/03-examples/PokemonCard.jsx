import { useLayoutEffect, useRef, useState } from "react"


export const PokemonCard = ({ id, name, sprites = []}) => {
    // console.log(sprites);
    
    // codigo que se agrega para useLayouthEffect
    const h2Ref = useRef();
    const [boxSize, setBoxSize] = useState({with: 0, height: 0})

    useLayoutEffect(() => {
        const {height, width} = h2Ref.current.getBoundingClientRect();
        console.log(height, width);
        setBoxSize({height, width});

    }, [name])

     // fin codigo que se agrega para useLayouthEffect

    return (
        <section style={{height:200, display:'flex', flexDirection:'row'}}>
            <h2 ref={h2Ref} className="text-capitalize">#{id} - {name}</h2>

            {
                sprites.map((sprite) => <img key={sprite} src={sprite} alt={name} />)
            }

            <pre>{JSON.stringify(boxSize)}</pre>

        </section>
    )
}
