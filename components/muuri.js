import { Fragment, Component } from "react";
import MuuriGrid from "react-muuri";

class Muuri extends Component {
  constructor() {
    super();
    this.handleImgLoad = this.handleImgLoad.bind(this);
  }

  componentDidMount() {
    this.grid = new MuuriGrid({
      node: this.gridElement,
      defaultOptions: {
        dragEnabled: true,
        layout: {
          fillGaps: true
        }
      }
    });

    // An example of how to use `getEvent()` to make `synchronize()` update the grid.
    this.grid.getEvent("dragEnd");
  }

  handleImgLoad() {
    console.log("AAA");
    this.grid.grid.refreshItems().layout();
  }

  componentWillUnmount() {
    this.grid.getMethod("destroy"); // Required: Destroy the grid when the component is unmounted.
  }

  render() {
    const containerStyle = {
      position: "relative"
    };
    const items = this.props.items || [];
    return (
      <Fragment>
        <div style={containerStyle}>
          {/* Assign a ref to the grid container so the virtual DOM will ignore it for now (WIP). */}
          <div ref={gridElement => (this.gridElement = gridElement)}>
            {items.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <div className="item-content">
                    <img
                      src={item.url}
                      alt={item.title || "gallery image"}
                      onLoad={this.handleImgLoad}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <style jsx>{`
          .grid {
            position: relative;
          }
          .item {
            display: block;
            position: absolute;
            width: 100px;
            height: 100px;
            margin: 5px;
            z-index: 1;
            background: #000;
            color: #fff;
            border: 5px solid black;
          }

          .item:hover {
            cursor: pointer;
            border-color: grey;
          }

          .item.muuri-item-dragging {
            z-index: 3;
          }
          .item.muuri-item-releasing {
            z-index: 2;
          }
          .item.muuri-item-hidden {
            z-index: 0;
          }
          .item-content {
            position: relative;
            width: 100%;
            height: 100%;
            background: white;
            color: black;
          }
          .item-content > img {
            display: block;
            border-radius: 6px;
          }

          .item.muuri-item-dragging {
            border-color: blue;
          }
          .item.muuri-item-releasing {
            border-color: blueViolet;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default Muuri;

// <Lorum />
// {gallery.map((row, index) => {
//   return (
//     <GalleryRow
//       key={index}
//       items={row.items}
//       height={row.height || 500}
//     />
//   );
// })}
