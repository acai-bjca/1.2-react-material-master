import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userName:'', passw:'', remember: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        localStorage.setItem('username', 'amalia');
        localStorage.setItem('password', 'amalia');
        localStorage.setItem('remember', false);        
    }
    handleChange(e){        
        if(e.target.id === 'email'){
            this.setState({userName: e.target.value});            
        }else if(e.target.id === 'password'){
            this.setState({passw: e.target.value});            
        }
    }

    handleClick(e){
        if (!this.state.userName || !this.state.passw){
            return;
        }if(this.state.userName === localStorage.getItem('username') && this.state.passw === localStorage.getItem('password')){
            localStorage.setItem('remember', true);
        }
    }
    
    render() {
        return (            
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.handleChange} selected={this.state.userName}/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handleChange}
                                    selected={this.state.passw}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                                onClick = {this.handleClick}                                
                            >
                                Sign in
                            </Button>
                            {/*<App isLoggedIn={
                                ((this.state.userName === localStorage.getItem('username')) && (this.state.password === localStorage.getItem('password'))) ? true : false}>
                            </App>*/}
                            }/>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
            
        );
    }
}