function NewComponent({name, children}) {
    return (
        <div>
            <h1>Привет, {name}, </h1> 
            {children}
        </div>
    );
}

export {NewComponent}