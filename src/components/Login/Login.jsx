import { Field, reduxForm } from "redux-form"
import { requiredField } from "../../utils/validators/validators"
import { Input } from "../common/FormsControls/formsControls"
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer'
import { Navigate } from "react-router-dom";
import classes from '../common/FormsControls/formsControls.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="email" validate={[requiredField]}
                    placeholder="Email" component={Input}/>
            </div>
            <div>
                <Field name="password" validate={[requiredField]} type={'password'}
                    placeholder="Password" component={Input}/>
            </div>
            <div>
                <Field name="rememberMe"
                    type={'checkbox'} component={Input} />Remember me
            </div>
            {props.error && <div className={classes.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm ({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Navigate to={'/profile'} />
    }

    return (
        <div>
            <h1>Login Page</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login})(Login);