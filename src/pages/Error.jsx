import BgVideo from "../components/backgroundVideo"


function Error(){
    
    return(
        <main className="h-fit md:h-[100vh] w-[90vw] flex flex-wrap place-content-center-safe">
            <BgVideo />
            <section className="w-full md:w-[60vw] lg:w-[40vw] h-fit font-hahmlet text-indigo-50 px-2 py-4 md:mt-16 lg:p-8 rounded-3xl bg-black/40 backdrop-blur-lg mr-0">
            
            </section>
        </main>
    )
}

export default Error