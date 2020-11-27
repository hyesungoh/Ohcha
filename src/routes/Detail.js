import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div className="detail">
                    <img
                        src={location.state.large_poster}
                        alt={location.state.title}
                    ></img>
                    <div className="data">
                        <h3>{location.state.title}</h3>
                        <span>{location.state.year}</span>
                        <span>{location.state.genres}</span>
                        <p>{location.state.summary}</p>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;
