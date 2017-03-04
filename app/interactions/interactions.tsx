import * as React from 'react';
import {Link} from 'react-router';
import {Select} from './select';
import {Draw} from './draw';
import {Modify} from './modify';

export class Interactions extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Interactions</h1>
        <ul role="nav" className="group-menu">
          <li><Link to="interactions/select">Select</Link></li>
          <li><Link to="interactions/draw">Draw</Link></li>
          <li><Link to="interactions/modify">Modify</Link></li>
        </ul>

        <div className="contents">
          {this.props.children}
        </div>
      </div>
    );
  }
}