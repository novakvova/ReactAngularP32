import TextFieldBase from "../components/TextFieldBase";
import {useState} from "react";

const RegisterPage = () => {

    const [form, setForm] = useState({
        email: "",
        firstName: "",
        age: 18,
    });

    const onChangeHandler = (e) => {
        // console.log("On change handler", e.target.value);
        // console.log("On change handler", e.target.name);
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data", form);
    }

    return (
        <>
            <h1 className={"text-center"}>Реєстрація</h1>
            <div className="row">
                <form onSubmit={onSubmit} className={"col-md-6 offset-md-3"}>

                    <TextFieldBase
                        label={"Електронна пошта"}
                        field={`email`}
                        type={"email"}
                        onChange={onChangeHandler}
                        value={form.email}
                    />

                    <TextFieldBase
                        label={"Прізвище"}
                        field={"firstName"}
                        onChange={onChangeHandler}
                        value={form.firstName}
                    />

                    <TextFieldBase
                        label={"Вік"}
                        field={"age"}
                        onChange={onChangeHandler}
                        type={"number"}
                        value={form.age}
                    />

                    <button className={"btn btn-success"} type={"submit"}>Реєстрація</button>
                </form>
            </div>
        </>
);
};

export default RegisterPage;