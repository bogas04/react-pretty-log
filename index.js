'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrettyLog = (function (_React$Component) {
  _inherits(PrettyLog, _React$Component);

  function PrettyLog(props) {
    _classCallCheck(this, PrettyLog);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PrettyLog).call(this, props));

    var font = _this.props.font || 'Helvetica';
    var color = _this.props.color || 'rgb(176, 154, 154)';
    var size = _this.props.size || '100px';

    _this.mainStyle = {
      textAlign: 'center',
      fontFamily: font,
      margin: '10px'
    };

    _this.titleStyle = {
      paddingTop: '4px',
      color: color,
      fontWeight: 'bold',
      textTransform: 'uppercase'
    };

    _this.indexStyle = {
      display: 'inline',
      position: 'relative',
      top: '-11px',
      right: '-35px',
      height: '5px',
      width: '5px',
      padding: '1px 4px',
      verticalAlign: 'middle',
      border: '4px solid ' + color,
      borderRadius: '50%',
      color: 'white',
      backgroundColor: color,
      zIndex: 1
    };

    _this.imageStyle = {
      borderRadius: '50%',
      border: '5px solid ' + color,
      height: size,
      width: size,
      marginLeft: '-14px',
      position: 'relative',
      zIndex: 2
    };
    return _this;
  }

  _createClass(PrettyLog, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var cards = this.props.items.map(function (v, k) {
        return React.createElement(
          'div',
          { className: _this2.props.classes, style: _this2.mainStyle, key: v.url },
          React.createElement(
            'div',
            { style: _this2.indexStyle },
            k + 1
          ),
          React.createElement('img', { style: _this2.imageStyle, src: v.image, alt: v.title }),
          React.createElement(
            'div',
            { style: _this2.titleStyle },
            v.title
          )
        );
      });

      return React.createElement(
        'div',
        null,
        cards
      );
    }
  }]);

  return PrettyLog;
})(React.Component);

module.exports = PrettyLog;
