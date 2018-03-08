import React, { Component } from 'react';

class Inputpreview extends Component {
    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        value={this.props.value}
                        onChange={e => this.props.onChange(e.target.value)}
                        />
                </form>
            </div>
        );
    }
}

export default Inputpreview;
