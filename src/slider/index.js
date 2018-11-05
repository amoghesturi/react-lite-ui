import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';

import defaultTheme from './theme.scss';

const { findDOMNode: findNode } = ReactDOM;

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.sliderTracker = null;
    this.sliderBar = null;
    this.sliderUpperRange = null;
    this.state = {
      // valueMax : used as max value selected in a range slider.
      // and is default store for normal slider max value.
      valueMax: props.min,
      // valueMin : used as min value of selected range for range
      // slider.
      valueMin: props.min,
    };
  }

  dragEvent = (e) => {
    if (
      (e.clientX <=
        (findNode(this.sliderBar).offsetLeft +
          findNode(this.sliderBar).getBoundingClientRect().width)) &&
      (e.clientX >= findNode(this.sliderBar).offsetLeft)
    ) {
      const width =
        ((e.clientX - findNode(this.sliderBar).offsetLeft) /
          findNode(this.sliderBar).getBoundingClientRect().width) *
        100;
      findNode(this.sliderTracker).style.width = `${width}%`;
      this.setState({
        valueMax: Math.round((width / 100) * this.props.max),
      }, () => {
        const { onChange } = this.props;
        const { valueMin, valueMax } = this.state;
        onChange(valueMin, valueMax);
      });
    }
  };

  startDrag = () => {
    document.body.addEventListener('mouseup', this.stopDrag);
    document.body.addEventListener('mousemove', this.dragEvent);
  };
  stopDrag = () => {
    document.body.removeEventListener('mousemove', this.dragEvent);
  };

  render() {
    const { theme, disabled, range } = this.props;
    return (
      <div
        className={theme.slider}
        ref={(ref) => {
          this.sliderBar = ref;
        }}
      >
        {range && (
          <div
            className={theme['slider-offset']}
            ref={(ref) => {
              this.sliderOffset = ref;
            }}
          >
            <span
              className={theme['slider-button']}
              ref={(ref) => {
                this.sliderLowerRange = ref;
              }}
            />
            <div className={theme.tooltip}>
              <span>{this.state.valueMin}</span>
              <div />
            </div>
          </div>
        )}
        <div
          className={theme['slider-tracker']}
          ref={(ref) => {
            this.sliderTracker = ref;
          }}
        >
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <span
            className={theme['slider-button']}
            onMouseDown={this.startDrag}
            ref={(ref) => {
              this.sliderUpperRange = ref;
            }}
          />
          <div className={theme.tooltip}>
            <span>{this.state.valueMax}</span>
            <div />
          </div>
        </div>
      </div>
    );
  }
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  theme: PropTypes.oneOfType([PropTypes.object]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  step: PropTypes.number,
  range: PropTypes.bool,
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  theme: defaultTheme,
  disabled: false,
  step: null,
  range: false,
  onChange: (min, max) => {
    console.log({ min, max });
  },
};

export default themr('CBSlider', defaultTheme)(Slider);
