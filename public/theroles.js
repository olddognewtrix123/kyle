
// Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `Roles`. See https://fb.me/react-warning-keys for more information.
//    in form (created by Roles)

// got an incomplete solution here:  https://stackoverflow.com/questions/36512686/react-dynamically-add-input-fields-to-form

// this may be the answer: https://goshakkk.name/array-form-inputs/

var Roles = React.createClass({


    


    render: function() {
        return(
            <div>
               <form>
                   <div id="dynamicInput">
                       {this.props.inputs.map(input => <input type = "text" key={input}  id={this.props.inputsindex} placeholder='Enter something here' onChange={this.props.onChange}/>)}
                   </div>
               </form>
               <button onClick={() =>this.props.onClick()}>
                   CLICK ME TO ADD AN INPUT
               </button>
            </div>
        );
    },

})

