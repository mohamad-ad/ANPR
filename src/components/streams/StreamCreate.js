import React from 'react'
import {Field, reduxForm } from 'redux-form'
import { createStream } from '../../actions'
import {connect} from 'react-redux'
 
class StreamCreate extends React.Component{

    renderError = ({error , touched}) =>{
        // console.log(error)
        if( error && touched)
            return (
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            )
    }

    renderInput = ({input, label, meta})=>{
        // console.log(meta)
        const className = `field ${meta.error && meta.touched ? 'error':''}`
        return(
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete='off'/>
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = formValues =>{
        console.log(formValues)
        this.props.createStream(formValues)

    }

    render(){
        return(
            <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <Field name='title' component={this.renderInput} label='enter title'/>
                <Field name='description' component={this.renderInput} label='enter description'/>
                <button className='ui button primary'>submit</button>
            </form>
        )
    }
}

const validate = formValues =>{
    // console.log(formValues)
    const error = {}
    if(!formValues.title){
        error.title = 'please enter a title'
    }
    if(!formValues.description){
        error.description = 'please enter a description'
    }
    return error
}


const wrappedForm= reduxForm({
    form:'streamCreate',
    validate
})(StreamCreate)

export default connect(null, {
    createStream
})(wrappedForm)