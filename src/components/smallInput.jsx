function SmallInput({type, id, name, autoComplete}){
    return(
        <input type={type} id={id} name={name} autoComplete={autoComplete} required className="text-black bg-white rounded-lg my-2 md:m-2 p-2 text-center"/>
    )
}

export default SmallInput