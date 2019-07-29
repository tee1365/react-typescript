import React, { Component } from "react";
import { MobileStepper, Button, Card } from "@material-ui/core";
import "./Homepage.css";

const initialState = { photos: [], index: 0, isLoading: true, maxLength: 0 };
type State = Readonly<typeof initialState>;

class Homepage extends Component<object, State> {
  BASE_URL: string = "https://api.unsplash.com/";
  ACCESS_KEY: string =
    "103cd34957b8add806739a246abeb12c0c102ffa998a312b525c505eb6096177";
  SECRET_KEY: string =
    "3eccf988719f659efa7b285ec9344b570fa335849f9ab85c3661a032f45cf335";

  readonly state: State = initialState;

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.resize);
    let photoUrl: string =
      this.BASE_URL + "photos/?client_id=" + this.ACCESS_KEY;
    fetch(photoUrl)
      .then(response => response.json())
      .then(result => {
        this.setState(() => {
          console.log(result);
          return {
            photos: result,
            isLoading: false,
            maxLength: result.length
          };
        });
      })
      .finally(() => {
        this.resize();
      });
  };

  resize = (): void => {
    let imageContainerNode: any = this.refs["imageContainer"];
    let imageNode: any = this.refs["homeImage"];
    let imageNodeHeight: number = imageNode.clientHeight;
    let imageContainerNodeHeight: number = imageContainerNode.clientHeight;
    let height = imageContainerNodeHeight - imageNodeHeight;
    console.log(imageNode.style);
    imageNode.style.marginTop = height / 2 + "px";
    imageNode.style.marginBottom = height / 2 + "px";
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  handleBack = () => {
    this.setState((prevState: State) => {
      return {
        index: prevState.index - 1
      };
    });
  };

  handleNext = () => {
    this.setState((prevState: State) => {
      return {
        index: prevState.index + 1
      };
    });
  };

  render = () => {
    const { photos, index, isLoading, maxLength } = this.state;
    return (
      <div>
        {isLoading ? (
          "no data"
        ) : (
          <Card className="card">
            <div ref="imageContainer" className="imgContainer">
              <img
                ref="homeImage"
                className="img"
                src={(photos[index] as any).urls.regular}
                alt=""
              />
            </div>
            <MobileStepper
              steps={maxLength}
              position="static"
              activeStep={index}
              nextButton={
                <Button
                  size="small"
                  onClick={this.handleNext}
                  disabled={index === maxLength - 1}
                >
                  Next
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={this.handleBack}
                  disabled={index === 0}
                >
                  back
                </Button>
              }
            />
          </Card>
        )}
      </div>
    );
  };
}

export default Homepage;
