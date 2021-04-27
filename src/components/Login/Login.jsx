import React from "react";
import styles from "./Login.module.css";
import {reduxForm, Field} from "redux-form";
import {Input} from "../common/formControls/FormControls";
import { required } from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/loginReducer";
import { Redirect } from "react-router-dom";



let Form = (props) => {
    return (<form className={styles.Form} onSubmit={props.handleSubmit}>

<div className={styles.txt}><b>PostCut</b> - это современная социальная сеть, которая связывает все слои населения.
        <p>Здесь вы сможете искать людей, публиковать свои фото, видео, а также свои мысли, </p>
            <p>отмечать людей на публикациях и многое другое.</p>
        Это единственный ресурс неподконтрольный никакой организации,
       <p> огранам власти и другим подобным лицам.</p>
            <p>Приятного пользования, ваш любимый <b>PostCut</b></p>
        </div>

                <div>
                    <div>
                        <hr/>
                        <h2>Instant login</h2>
                    </div>

                </div>

                <div className={styles.Input}>
                    <label>Login<span>*</span></label>
                    <Field type={"text"} placeholder={"Введите логин"} component={Input} validate={required} name={"email"}/>
                </div>

                <div className={styles.Input}>
                    <label>Password<span>*</span></label>
                    <Field type={"password"} placeholder={"Введите пароль"} component={Input} validate={required} name={"password"}/>
                </div>

                <div className={styles.RememberMe}>
                    <Field type={"checkbox"} component={"input"} name={"rememberMe"}/> Remember me
                </div>


                {props.captcha && <div className={styles.Captcha}> 
                                        <img src={props.captcha} alt="captcha"/>
                                        <Field type={"text"} 
                                            placeholder={"enter captcha"} 
                                            component={Input} 
                                            name={"captcha"}/>
                </div>}

                {props.error && <div className={styles.Error}>{props.error}</div>}

                <div>
                    <button type="submit" disabled={props.submitting}>Log in</button>
                </div>

            </form>)
}

let ReduxLoginForm = reduxForm({form: "login"})(Form)


class Login extends React.Component{
    componentDidMount() {
        document.title = "Login";
    }

    render() {
        let onSubmit = (loginData) => {
            this.props.login(loginData.email, loginData.password, loginData.rememberMe, loginData.captcha)

        }

        if(this.props.isLogined) {
            return <Redirect to="/profile"/>
        }

        return(<div className={styles.Login}>
            <ReduxLoginForm onSubmit={onSubmit} captcha={this.props.captcha}/>
        </div>)
    }
}


const mapStateToProps = (state) => ({
    isLogined: state.LoginReducer.isLogined,
    captcha: state.LoginReducer.captchaURL
})
export default connect(mapStateToProps, {login})(Login);