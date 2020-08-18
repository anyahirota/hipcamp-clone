import React from 'react'; 

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    terms() {
        if (this.props.formType === 'signup') {
            return (
                <div>
                    <br/>
                    <p className="terms-and-conditions">By signing up, I agree to CalCamper's terms and privacy policy.</p>
                    <br/>
                </div>
            )
        }
    }
    
    names() {
        if (this.props.formType === 'signup') {
            return (
                <div className="first-last-names-inputs">
                    <input type="text" 
                        value={this.state.first_name} 
                        onChange={this.update("first_name")}
                        className="login-input"
                        onClick={this.clearInput("first_name")}
                    />
                    <input type="text"
                        value={this.state.last_name}
                        onChange={this.update("last_name")}
                        className="login-input"
                        onClick={this.clearInput("last_name")}
                    />
                    <br/>
                </div>
            )
        }
    }

    clearInput(field) {
        if (this.state[field] === this.props.user[field]) {
            return () => this.setState({
                [field]: ""
            });
        }
    }

    update(field) {
        
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        let passwordType; 
        if (this.state.password === this.props.user.password) {
            passwordType = "text"
        } else {
            passwordType = "password"
        }; 

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h1 className="form-header-message">{this.props.headerMessage}</h1>
                    
                    <h3 className="form-header-submessage">{this.props.headerSubMessage}</h3>
                    
                    {this.renderErrors()}
                    
                    <div className="login-form">
                        {this.names()}
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update("email")}
                            className="login-input"
                            onClick={this.clearInput("email")}
                        />
                        <br/>
                        <input type={passwordType}
                            value={this.state.password}
                            onChange={this.update("password")}
                            className="login-input"
                            onClick={this.clearInput("password")}
                        />
                        <br/>
                        <input type="submit" value={this.props.buttonMessage}/>
                    </div>
                    {this.terms()}
                    <div className="alternative-login-link">
                        <p>{this.props.footerMessage}</p>
                        <p>{this.props.navLink}</p>
                    </div>
                </form>
            </div>
        )
    }

}

export default SessionForm;