import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus)

class GridItem extends Component {
  // static defaultProps = {
  //   width: "12"
  // };

  constructor() {
    console.warn("reactstrap already has card components so we just have to make use of those components");
    
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
          <Button close><span aria-hidden="true"><FontAwesomeIcon icon="plus" size="xs" /></span></Button>
        </div>
        <div className="card-body">
          
        </div>
      </div>
    );
  }
}

export default GridItem;
