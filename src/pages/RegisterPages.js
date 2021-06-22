import React from 'react';


const RegisterPages = (props) => {



    const makeRegister = (e) => {
        e.preventDefault();

        let login = e.target.name.value;
        let surname = e.target.surname.value;
        let mail = e.target.mail.value;
        let password = e.target.password.value;
        let repetition = e.target.repetition.value;


        if (password && password === repetition) {

            localStorage.setItem("login", login);
            localStorage.setItem("surname", surname);
            localStorage.setItem("mail", mail);

            localStorage.setItem("logget", password);

            props.history.push("/home")
        } else {
            alert("Password wrong!!!")
        }

        console.log(props)
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-5 offset-3 mt-2 ">
                    <h1 className="text-center ">Register page</h1>
                    <div className="card ">
                        <div className="card-body">
                            <form onSubmit={makeRegister}>
                                <label htmlFor="name" className="w-100 mb-3"> Name
                                    <input type="text" id="name" placeholder="Name" name="name"
                                           className="form-control w-100"/>
                                </label>
                                <label htmlFor="surname" className="w-100 mb-3"> Surname
                                    <input type="text" id="surname" name="surname" placeholder="Surname"
                                           className="form-control w-100"/>
                                </label>
                                <label htmlFor="mail" className="w-100 mb-3"> E-mail
                                    <input type="mail" id="mail" name="mail" placeholder="E-mail"
                                           className="form-control w-100"/>
                                </label>
                                <label htmlFor="password" className="w-100 mb-3"> Password
                                    <input type="password" id="password" name="password" placeholder="Password"
                                           className="form-control w-100"/>
                                </label>
                                <label htmlFor="repetition" className="w-100 mb-3">Repetition Password
                                    <input type="password" id="repetition" name="repetition"
                                           placeholder="Repetition Password"
                                           className="form-control w-100"/>
                                </label>

                                <button type="submit" className="btn btn-success">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RegisterPages;