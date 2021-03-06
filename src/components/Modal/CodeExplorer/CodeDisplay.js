import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

import { createLineStyle } from '../util';

/**
 * Code Display component.
 * @reactProps {function} clickInlineLink - Function to be called when a user clicks on a link.
 */

class CodeDisplay extends Component {
  state = { hoveredLine: undefined };

  hoverLine = hoveredLine => {
    this.setState({
      hoveredLine,
    });
  };

  render() {
    const { hoveredLine } = this.state;
    const { current, clickInlineLink } = this.props;
    docco.cursor = 'default';
    return (
      <SyntaxHighlighter
        wrapLines
        showLineNumbers
        lineProps={lineNumber => ({
          style: createLineStyle(lineNumber, current, hoveredLine),
          onClick: () => {
            clickInlineLink(lineNumber);
          },
          onMouseOver: () => {
            this.hoverLine(lineNumber);
          },
          onMouseLeave: () => {
            this.hoverLine(undefined);
          },
        })}
        language="javascript"
        style={docco}
        customStyle={{ cursor: 'default' }}
      >
        {current.code}
      </SyntaxHighlighter>
    );
  }
}

CodeDisplay.propTypes = {
  clickInlineLink: PropTypes.func.isRequired,
  current: PropTypes.shape({
    code: PropTypes.string,
  }).isRequired,
};

export default CodeDisplay;
