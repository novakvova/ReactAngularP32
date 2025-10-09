import classNames from "classnames";
import { Eye, EyeOff } from "lucide-react";
import {useState} from "react";

const PasswordInput = ({label, field, value, error, touched, onChange}) => {

    const [showPassword, setShowPassword] = useState(false);

    const isError = touched && error;

    return (
        <div className="mb-3">
            <label htmlFor={field} className="form-label">
                {label}
            </label>
            <div className="input-group">
                <input type={showPassword ? "text" : "password"}
                       className={classNames("form-control", {
                           "is-invalid": isError
                       })}
                       name={field}
                       id={field}
                       value={value}
                       placeholder="********"
                       onChange={onChange}/>

                <span
                    className="input-group-text bg-light cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ cursor: 'pointer' }}
                >
                    {showPassword ? <EyeOff className="text-secondary" size={20} /> : <Eye className="text-secondary" size={20} />}
                </span>
                {isError && (<div className="invalid-feedback">{error}</div>)}
            </div>
        </div>
    );
}

export default PasswordInput;