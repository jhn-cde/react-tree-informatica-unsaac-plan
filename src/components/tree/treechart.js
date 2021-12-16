import React from "react";
import Tree from "react-d3-tree";
import Nodo from "./node"

const containerStyles = {
  width: "100%",
  height: "85vh"
};

export default class TreeChart extends React.PureComponent {
  state = {};
  height = 80;
  width = 150;
  yOffset = 80;
  yClearance = 150;

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: this.yOffset
      }
    });
  }
  render() {
    return (
      <div style={containerStyles} ref={(tc) => (this.treeContainer = tc)}>
        <Tree
          data={this.props.data}
          translate={this.state.translate}
          orientation="vertical"
          initialDepth = "1"
          renderCustomNodeElement={Nodo}
        />
      </div>
    );
  }
}