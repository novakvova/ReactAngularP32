import TextFieldBase from "../components/TextFieldBase";
import {useState} from "react";

const RegisterPage = () => {

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const onChangeHandler = (e) => {
        console.log("On change handler", e);
    }

    return (
        <>
            <h1 className={"text-center"}>Реєстрація</h1>
            <div className="row">
                <form className={"col-md-6 offset-md-3"}>
                    <TextFieldBase
                        label={"Електронна пошта"}
                        field={"email"}
                        type={"email"}
                        value={form.email}
                    />

                    <TextFieldBase
                        label={"Прізвище"}
                        field={"firstName"}
                        value={form.password}
                    />
                </form>
            </div>
        </>
);
};

export default RegisterPage;