import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" />
                <br />
                <input ref={emailRef} defaultValue={'rojoni1@gmail.com'} type="email" name="email" />
                <br />
                <input ref={passwordRef} type="text" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;

// 3. controlled element: one object in a state holding all the input fields value

// Alada alada state declare na kore ager moto, 1ta state declare korekaaj ta kora jabe
// Sob guli input field ke ekta object banai felbo

// 4. uncontrolled element: useRef to create a reference to the element
// and access value by using like: nameRef.current.value
// uncontrolled element(State diye control nah korbo nah, DOM er moddhe thakbe oitake refremce diye access korbo)
// Element ta ke react er state diye manage nah kore,
// Oita theke ekta reference diye jinish ta ke niye ashi

