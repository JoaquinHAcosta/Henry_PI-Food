import style from "./NotFound.module.css"
import React, { Component } from "react"
import { connect } from "react-redux"

class NotFound extends Component {
    constructor(props) {
        super(props)
            this.state = {
        }
    }
    render() {

        const { stringSearched } = this.props
        return(
            <div className={style.container}>
                    { stringSearched !== "" ? 
                        <div className={style.containerJr}>
                            <h1>No matches found for: </h1>
                            <h2>"{stringSearched}"</h2>
                        </div>
                        :
                        <div className={style.containerErr}>
                            <h1>No recipes founded</h1>
                        </div>
                    }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stringSearched: state.stringSearched
    }
}

export default connect(mapStateToProps)(NotFound);
