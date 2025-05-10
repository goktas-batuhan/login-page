import { Button, Form, FormText, Input, Label, FormGroup } from "reactstrap"
import "./LoginPage.css"
function App() {


    return (
        <div className="all-page">
            <div className="blur">
                <Form className="Inner">
                    <FormGroup>
                        <h1 className="title">Login</h1>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">
                            
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Type your email here..."
                            type="email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">
                            
                        </Label>
                        <Input
                            id="password"
                            name="password"
                            placeholder="type your password here..."
                            type="password"
                        />
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" />
                        {' '}
                        <Label check>
                            Remember me
                        </Label>
                    </FormGroup>
                    <Button className="login-button">
                        Login
                    </Button>
                </Form>
            </div>
        </div>

    )
}

export default App
