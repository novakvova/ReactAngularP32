import TextFieldBase from "../components/TextFieldBase";

const RegisterPage = () => {
    return (
        <>
            <h1 className={"text-center"}>Реєстрація</h1>
            <div className="row">
                <form className={"col-md-6 offset-md-3"}>
                    <TextFieldBase />
                    <TextFieldBase />
                </form>
            </div>
        </>
);
};

export default RegisterPage;