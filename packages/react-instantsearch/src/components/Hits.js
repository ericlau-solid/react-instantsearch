import PropTypes from 'prop-types';
import React, { Component } from 'react';

import BaseWidget from './BaseWidget';
import classNames from './classNames.js';

const widgetClassName = 'Results';
const cx = classNames(widgetClassName);

class Hits extends Component {
  render() {
    const { hitComponent: ItemComponent, hits, header, footer } = this.props;
    return (
      <BaseWidget
        widgetClassName={widgetClassName}
        header={header}
        footer={footer}
      >
        <ul {...cx(['list'])}>
          {hits.map(hit => <ItemComponent key={hit.objectID} hit={hit} />)}
        </ul>
      </BaseWidget>
    );
  }
}

Hits.propTypes = {
  hits: PropTypes.array,
  hitComponent: PropTypes.func.isRequired,
  header: PropTypes.node,
  footer: PropTypes.node,
};

/* eslint-disable react/display-name */
Hits.defaultProps = {
  hitComponent: hit => (
    <li
      {...cx(['item'])}
      style={{
        borderBottom: '1px solid #bbb',
        paddingBottom: '5px',
        marginBottom: '5px',
      }}
    >
      {JSON.stringify(hit).slice(0, 100)}...
    </li>
  ),
};
/* eslint-enable react/display-name */

export default Hits;
