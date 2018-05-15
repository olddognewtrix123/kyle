

var Req = React.createClass({
    render: function(){
        return (
            <div>
                <form id="theReq">
                <label>
                    Peter:
                  </label>
                    <input type = "text" required ref="theReq" name="theReqN" placeholder='Enter something here' onChange={this.props.onChange}/>
                </form>
            </div>
        );
    }
});



