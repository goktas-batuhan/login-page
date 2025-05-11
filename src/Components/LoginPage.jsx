import { Button, Form, FormText, Input, Label, FormGroup } from "reactstrap"
import { useForm } from "react-hook-form"
import "./LoginPage.css"
function App() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({
        mode: 'onChange',
        defaultValues:{
            email:"",
            password:"",
        }
    });


    const onSubmit = (data) => {
        console.log(data)

    }

    console.log("Form hataları:", errors);




    const { ref, ...registerEmail } = register("email", {
        required: "Email is required",
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Please enter a valid email",
        },
    });

    const { ref: passwordRef, ...registerPassword } = register("password", {
        required: "Password is required",
        validate: validatePassword
    });

    
    function validatePassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password) || "Şifre en az 8 karakter, büyük harf, küçük harf, sayı ve özel karakter içermeli.";
    }





    return (
        <div className="all-page">
            <div className="blur">
                <Form className="Inner" onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>
                        <h1 className="title">Login</h1>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">

                        </Label>
                        <Input
                            id="email"
                            placeholder="Type your email here..."
                            type="email"
                            innerRef={ref}
                            {...registerEmail}

                        />
                        {errors.email && <p>{errors.email.message}</p>}

                    </FormGroup>
                    <FormGroup>
                        <Label for="password">

                        </Label>
                        <Input
                            id="password"
                            placeholder="type your password here..."
                            type="password"
                            innerRef={passwordRef}
                            {...registerPassword}


                        />
                        {errors.password && <p>{errors.password.message}</p>}

                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" />
                        {' '}
                        <Label check>
                            Remember me
                        </Label>
                    </FormGroup>
                    <Button type="submit" className="login-button">
                        Login
                    </Button>
                </Form>
            </div>
        </div>

    )
}

export default App
