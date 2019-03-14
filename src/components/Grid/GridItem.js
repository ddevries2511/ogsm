import React, { Component } from 'react';

class GridItem extends Component {
  // static defaultProps = {
  //   width: "12"
  // };

  constructor() {
    super();

    this.state = {
      title: 'title',
      cards: []
    };
  }

  // componentDidMount() {
  //   console.log(this.props);
  // }

  updateCard(cardParams) {

  }

  deleteCard(cardId) {

  }

  render() {
    const { title, cards } = this.state;
    console.log(this.props);

    var GridItemClasses = [];
    GridItemClasses.push("GridItem");
    GridItemClasses.push("card");
    GridItemClasses.push("col");
    GridItemClasses.push("col-" + this.props.width);

    GridItemClasses = GridItemClasses.join(" ");

    return (
      <div className={GridItemClasses}>
        <div className="card-header font-weight-bold text-center">
          {title}
        </div>
        <div className="card-body">
          
        </div>
      </div>
    );
  }
}

export default GridItem;
