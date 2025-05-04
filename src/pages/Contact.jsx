import { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import video from "../assets/video/bg_video.mp4"
import SmallInput from "../components/smallInput";
import { lazy, Suspense } from 'react'

const LazyVideo = lazy(() => import ('../components/backgroundVideo'))

function Contact(){

    const form = useRef();
    const [okDisplay, setOkDisplay] = useState("hidden")
    const [errorDisplay, setErrorDisplay] = useState("hidden")

    const sendEmail = (e) => {
        e.preventDefault();

{/** Sending the form with EmailJs and env */}
        emailjs
        .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
        })
        .then(
/** If the form is correctly sent, the form inputs are cleared and the right text appears */
            () => {
            setOkDisplay("block")
            form.current.reset()
            },
            () => {
/** Else, the error text appears to let the user know an error occured */
            setErrorDisplay("block")
            },
        );
    };
    
    return(
        <main className="h-fit md:h-[100vh] w-[90vw] flex flex-wrap place-content-center-safe">
            <Suspense fallback={<div>Loading...</div>}>
                <LazyVideo video={video}/>
            </Suspense>
            <section className="w-full md:w-[60vw] lg:w-[40vw] h-fit font-hahmlet text-indigo-50 px-2 py-4 md:mt-16 lg:p-8 rounded-3xl bg-black/40 backdrop-blur-lg mr-0">
                <h2 className="text-base md:text-xl mb-8 md:mb-16 font-semibold">Pour tout renseignement, n'hésitez pas à me contacter via le formulaire ci-dessous :</h2>
                <form ref={form} onSubmit={sendEmail} className="m-auto flex flex-col gap-8 md:gap-12 items-center text-sm text-semibold">
                    <div className="grid grid-cols-1 xl:grid-cols-3 justify-between w-full">
                        <div className="flex flex-col">
                            <label htmlFor="name"><i className="fa-solid fa-asterisk text-red-500"></i> Nom :</label>
                            <SmallInput type="text" id="name" name="name" autoComplete="true" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email"><i className="fa-solid fa-asterisk text-red-500"></i> Adresse mail :</label>
                            <SmallInput type="email" id="email" name="email" autoComplete="true" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="phone">Téléphone :</label>
                            <SmallInput type="tel" id="phone" name="phone" autoComplete="true" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <label htmlFor="message"><i className="fa-solid fa-asterisk text-red-500"></i> Message :</label>
                        <textarea name="message" id="message" className="text-black w-full bg-white rounded-lg my-2 md:m-2 p-2 text-justify h-[20vh]"/>
                    </div>
                    <p><i className="fa-solid fa-asterisk text-red-500"></i> champs obligatoires.</p>
                    <input type="submit" value="Envoyer" className="btn_enter w-fit px-4 py-2 h-[3em] w-1/4 text-black text-center content-center rounded-4xl transition-all duration-400 ease-in-out"/>
        {/** After submiting the form, we let the user know if it's message as correctly been sent */}
                    <p className={okDisplay}>Votre message a bien été envoyé !</p>
                    <p className={errorDisplay}>Une erreur s'est produite lors de l'envoi du message.<br/>Si l'erreur persiste, envoyez-moi un mail à l'adresse suivant :<br/>julie.cpoignant@gmail.com</p>
                </form>
            </section>
        </main>
    )
}

export default Contact