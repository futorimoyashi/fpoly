import React, {Component} from 'react'
import axios from 'axios'

export const AuthContext = React.createContext()

export class AuthProvider extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLogin: 'Nah'
        }
        this.check = this.check.bind(this)
    }

    check(user, pass) {
        if(user.length > 0 && pass.length > 0) {
            const url = 'https://quiz-online-fpt.herokuapp.com/users/' + user
            axios.get(url).then(res => {
                if(pass === res.data.password) {
                    this.setState({isLogin: 'Ok'})
                }
            })
        }
    }

    render() {
        return <AuthContext.Provider value={{
            isLogin: this.state.isLogin,
            check: this.check
        }}>
            {this.props.children}
        </AuthContext.Provider>
    }
}