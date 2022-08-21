import { Field, reduxForm } from "redux-form"
import { requiredField } from "../../utils/validators/validators"
import { Input } from "../common/FormsControls/formsControls"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="login" validate={[requiredField]}
                    placeholder="Login" component={Input}/>
            </div>
            <div>
                <Field name="password" validate={[requiredField]}
                    placeholder="Password" component={Input}/>
            </div>
            <div>
                <Field name="remember-me"
                    type={'checkbox'} component={Input} />Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm ({
    form: 'login'
})(LoginForm)

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div>
            <h1>Login Page</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;