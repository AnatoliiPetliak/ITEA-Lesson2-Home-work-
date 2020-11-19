import React, { Component } from "react";
import LoaderImg from "./LoaderImg";
import "./Preloader.css";

class PreloadingDemo extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: [],
    error: null,
    errorInfo: null,
  };

  componentDidMount = () => {
    setTimeout(() => {
      let image = new Image();
      image.src =
        "https://media.springernature.com/lw630/nature-cms/uploads/cms/pages/2913/top_item_image/cuttlefish-e8a66fd9700cda20a859da17e7ec5748.png";

      const img = [image.src];
      const covertedImg = img.map((image) => {
        return { image };
      });

      this.setState({
        data: covertedImg,
      });
    }, 2000);
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }
  render() {
    const { data, error } = this.state;
    console.log(data);

    if (error) {
      return <h1>Error caught!</h1>;
    }

    if (data.length === 0) {
      console.log(data);
      return <div className="loader"></div>;
    }

    return (
      <div>
        <LoaderImg src="https://media.springernature.com/lw630/nature-cms/uploads/cms/pages/2913/top_item_image/cuttlefish-e8a66fd9700cda20a859da17e7ec5748.cpng" />
      </div>
    );
  }
}
export default PreloadingDemo;
