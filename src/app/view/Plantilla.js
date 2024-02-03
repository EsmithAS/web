"use client";
import { useState } from "react";

const Plantilla = () => {
    const frases = [
        '¿Estas segura?, piensalo 😥',
        '¿Ya no me quieres? 🥺',
        'Toma un descanso y escucha a tu corazón 💓'
    ];
    const [frase, setFrase] = useState('¿Quieres pasar este 14 conmigo? 🎁💓');
    const [padding, setPadding] = useState(40);
    const [font, setFont] = useState(16);
    const [respuesta, setRespuesta] = useState(false);

    const optionFalse = async () => {
        const random = Math.round(Math.random() * ((frases.length - 1) - 0) + 0); 
        setFrase(frases[random]);
        setPadding(padding + 4);
        setFont(font + 2);
        setRespuesta(false);

        const response = await fetch("/api/post", {
            body: JSON.stringify({result: false}),
            method: "POST",
            next: { revalidate: 0 }
        });
    }

    const optionTrue = async () => {
        setRespuesta(true);

        const response = await fetch("/api/post", {
            body: JSON.stringify({result: true}),
            method: "POST",
            next: { revalidate: 0 }
        });
    }

    return (    
        <main className="flex items-center bg-white justify-center w-full h-screen">
        <div className="flex flex-col items-center justify-center">
            {
                !respuesta ? (
                    <>
                        <img src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" className="w-32"/>
                        <h1 className="text-gray-700 font-semibold mt-5">
                            {frase}
                        </h1>
                    </>
                ) : (
                    <>
                        <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" className="w-32"/>
                        <h1 className="text-gray-700 font-semibold mt-5">
                            Yay 🥰!!!!
                        </h1>
                    </>
                )
            }
            
            <div className={`space-x-4 mt-5 ${ !respuesta ? 'block' : 'hidden' }`}>
                <button className="transition duration-300 bg-pink-400 text-pink-950 font-semibold" style={{fontSize: font + 'px', padding: '0px ' + padding + 'px'}} onClick={() => optionTrue()}>Sí</button>
                <button className="bg-gray-500 text-gray-800 px-10" onClick={ () => optionFalse()}>No</button>
            </div>
        </div>
        </main>
    )
}

export default Plantilla