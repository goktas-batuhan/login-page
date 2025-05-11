import { useEffect } from "react";
import { Button, Form, FormText, Input, Label, FormGroup } from "reactstrap"
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form"
import axios from "axios";
import "./LoginPage.css"

function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
    });



    useEffect(() => {
        const savedEmail = localStorage.getItem("email") || "";
        const savedPassword = localStorage.getItem("password") || "";
        const savedRemember = localStorage.getItem("rememberMe") === "true";

        reset({
            email: savedEmail,
            password: savedPassword,
            rememberMe: savedRemember,
        });
    }, [reset]);

    const onSubmit = (data) => {
        console.log(data)

        

        axios.post('https://reqres.in/api/login', data, {
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })
            .then(function (response) {
                console.log("token geldi ", response.data.token);
                notifySucces()
                if (data.rememberMe) {
                    localStorage.setItem("email", data.email)
                    localStorage.setItem("password", data.password)
                    localStorage.setItem("rememberMe", "true")
                } else {
                    localStorage.removeItem("email")
                    localStorage.removeItem("password")
                    localStorage.setItem("rememberMe", "false")
                }
                reset(
                    {
                        email: data.rememberMe ? data.email : "",
                        password: data.rememberMe ? data.password : "",
                        rememberMe: data.rememberMe,
                    }
                )
            })
            .catch(function (error) {
                notifyFailed()
                console.log(error);
            });

    }

    console.log("Form hataları:", errors);

    const notifySucces = () => {
        toast.success("Succesfully logined")
    }
    const notifyFailed = () => {
        toast.error("Invalid email or username. Please try again.");
    }


    const { ref, ...registerEmail } = register("email", {
        required: "Email is required",
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Please enter a valid email",
        },
    });

    const { ref: passwordRef, ...registerPassword } = register("password", {
        required: "Password is required",
        minLength: {
            value: 6,
            message: "Şifre en az 6 karakter olmalı"
        }
    });

    const { ref: rememberRef, ...registerRemember } = register("rememberMe");



    return (
        <div className="all-page">
            <div className="blur">
                <ToastContainer/>
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
                        <Label check>
                            <Input
                                type="checkbox"
                                id="rememberMe"
                                innerRef={rememberRef}
                                {...registerRemember}
                            />
                            {" "}Remember me
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
