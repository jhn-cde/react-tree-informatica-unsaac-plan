import React from "react";
import Tree from "react-d3-tree";

const containerStyles = {
  width: "100%",
  height: "100vh"
};

const Card = ({ nodeData }) => (
  <div>
    <div className="card">
      <div className="card-body">
        <h5 style={{ margin: "5px" }} className="card-title">
          {nodeData.attributes.title}
        </h5>
        <h6 style={{ margin: "5px" }} className="card-subtitle mb-2 text-muted">
          {nodeData.attributes.subtitle}
        </h6>
        <p style={{ margin: "5px" }} className="card-text">
          {nodeData.attributes.text}
        </p>
      </div>
    </div>
  </div>
);

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

  click = (event) => {
    console.log(event);
  };

  over = (event) => {
    console.log(event);
    console.log("Hello world")
  };

  render() {
    return (
      <div style={containerStyles} ref={(tc) => (this.treeContainer = tc)}>
        <Tree
          data={this.props.data}
          translate={this.state.translate}
          scaleExtent={{ min: 1, max: 3 }}
          allowForeignObjects
          orientation="vertical"
          nodeSvgShape={{ shape: "none" }}
          onMouseOver={(e) => this.over(e)}
          nodeLabelComponent={{
            render: <Card />,
            foreignObjectWrapper: {
              style: {
                background: "lightblue",
                border: "1px solid black",
                width: this.width.toString() + "px",
                height: this.height.toString() + "px",
                x: this.width / -2,
                y: this.height / -2
              }
            }
          }}
        />
      </div>
    );
  }
}




/*import React from "react";
import Tree from "react-d3-tree";
import clone from "clone";

// Componentes
import NodeLabel from "./node";

const Card = ({ nodeData }) => (
  <div>
    <div className="card">
      <div className="card-body">
        <h5 style={{ margin: "5px" }} className="card-title">
          {nodeData.attributes.nme}
        </h5>
        <p style={{ margin: "5px" }} className="card-text">
          Hola mundo
        </p>
      </div>
    </div>
  </div>
);


const containerStyles = {
  width: "100%",
  height: "100vh"
};

export default class TreeChart extends React.PureComponent {
  state = {
    data: this.props.data
  };

  injectedNodesCount = 0;

  addChildNode = () => {
    const nextData = clone(this.state.data);
    const target = nextData.children;
    this.injectedNodesCount++;
    target.push({
      name: `Inserted Node ${this.injectedNodesCount}`,
      id: `inserted-node-${this.injectedNodesCount}`
    });
    this.setState({
      data: nextData
    });
  };

  removeChildNode = () => {
    const nextData = clone(this.state.data);
    const target = nextData.children;
    target.pop();
    this.injectedNodesCount--;
    this.setState({
      data: nextData
    });
  };

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: 100,
        y: dimensions.height / 2
      }
    });
  }

  render() {
    const svgSquare = {
      shape: 'rect',
      shapeProps: {
        width: 20,
        height: 20,
        x: -10,
        y: -10,
      }
    }
    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree
          data={this.state.data}
          translate={this.state.translate}
          scaleExtent={{ min: 1, max: 3 }}
          orientation="horizontal"
          allowForeignObjects
          nodeSvgShape={svgSquare}
          nodeLabelComponent={{
            render: <Card nodeData/>,
            foreignObjectWrapper: {
              style:{
                background: "lightblue",
                border: "1px solid yellow",
              }
            }
          }}
          nodeSize={{ x: 300, y: 200 }}
        />
      </div>
    );
  }
}










/*
class NodeLabel extends React.PureComponent {
  render() {
    const {className, nodeData} = this.props
    return (
      <div className={className}>
        <h2>{nodeData.name}hola</h2>
        {nodeData._children && 
          <button>{nodeData._collapsed ? 'Expand' : 'Collapse'}</button>
        }
      </div>
    )
  }
}

function TreeChart({ data }) {
  const svgSquare = {
    shape: 'none',
    shapeProps: {
      width: 20,
      height: 20,
      x: -100,
      y: -10,
    }
  }
    return (
        <div id="treeWrapper" style={{width: '100%', height: '84vh'}}>
          <Tree 
            data={data}
            allowForeignObjects
            nodeLabelComponent={{
              render: <NodeLabel className='myLabelComponentInSvg' />,
              foreignObjectWrapper: {
                y: 24
              }
            }}
          />
        </div>
    );
}

export default TreeChart;
*/