import React from 'react'
import {connect} from 'react-redux'
import {signIn, signOut} from '../actions'


// 494914580508-oqhmuc8bh4k3nf8b01epif4crs92qgit.apps.googleusercontent.com
class GoogleAuth extends React.Component{
    componentDidMount(){
        /* global google */
        google.accounts.id.initialize({
            client_id:'494914580508-oqhmuc8bh4k3nf8b01epif4crs92qgit.apps.googleusercontent.com',
            callback: this.props.signIn
        })
        google.accounts.id.renderButton(
            document.getElementById('signIn'),
            {
                theme: 'outline',
                size: 'medium'
            }
        )   
    }
    
    render(){
        // console.log(this.props.user)
        return(
            <div className='item'>
                <div id="signIn" ></div>
                
                {
                    this.props.user &&  (<button onClick={this.props.signOut} className="ui red google button">
                        <i className="google icon" />
                        Sign Out
                    </button>)  
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return { user: state.auth.user }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)