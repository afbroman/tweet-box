"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TweetBox = (function (_React$Component) {
  _inherits(TweetBox, _React$Component);

  function TweetBox(props) {
    _classCallCheck(this, TweetBox);

    _get(Object.getPrototypeOf(TweetBox.prototype), "constructor", this).call(this, props);
    this.state = { statusText: '' };

    this.setStatusText = this.setStatusText.bind(this);
    this.submitTweet = this.submitTweet.bind(this);
    this.statusTextValid = this.statusTextValid.bind(this);
  }

  _createClass(TweetBox, [{
    key: "setStatusText",
    value: function setStatusText(event) {
      var text = event.target.value;
      this.setState({ statusText: text });
    }
  }, {
    key: "submitTweet",
    value: function submitTweet() {
      if (this.statusTextValid()) {
        this.props.tweetSubmitted(this.state.statusText);
      }
    }
  }, {
    key: "statusTextValid",
    value: function statusTextValid() {
      return this.state.statusText.length > 0 && this.state.statusText <= 140;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(TweetBoxStatus, { setStatusText: this.setStatusText }),
        React.createElement(TweetBoxCounter, { statusText: this.state.statusText }),
        React.createElement(
          "button",
          { type: "submit", onClick: this.submitTweet },
          "Tweet"
        )
      );
    }
  }]);

  return TweetBox;
})(React.Component);

var TweetBoxStatus = (function (_React$Component2) {
  _inherits(TweetBoxStatus, _React$Component2);

  function TweetBoxStatus() {
    _classCallCheck(this, TweetBoxStatus);

    _get(Object.getPrototypeOf(TweetBoxStatus.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(TweetBoxStatus, [{
    key: "render",
    value: function render() {
      return React.createElement("textarea", { onChange: this.props.setStatusText,
        placeholder: "What’s happening?"
      });
    }
  }]);

  return TweetBoxStatus;
})(React.Component);

var TweetBoxCounter = (function (_React$Component3) {
  _inherits(TweetBoxCounter, _React$Component3);

  function TweetBoxCounter(props) {
    _classCallCheck(this, TweetBoxCounter);

    _get(Object.getPrototypeOf(TweetBoxCounter.prototype), "constructor", this).call(this, props);
    this.counterStyles = this.counterStyles.bind(this);
    this.remainingCharacters = this.remainingCharacters.bind(this);
  }

  _createClass(TweetBoxCounter, [{
    key: "counterStyles",
    value: function counterStyles() {
      var color = 'red';
      var remainingCharacters = this.remainingCharacters();
      if (remainingCharacters > 30) {
        color = 'green';
      } else if (remainingCharacters > 0) {
        color = 'yellow';
      }
      return { color: color };
    }
  }, {
    key: "remainingCharacters",
    value: function remainingCharacters() {
      return 140 - this.props.statusText.length;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "span",
        { style: this.counterStyles() },
        this.remainingCharacters()
      );
    }
  }]);

  return TweetBoxCounter;
})(React.Component);

var tweetSubmitted = function tweetSubmitted(tweetData) {
  console.log("Tweet Submitted!");
  console.log(tweetData);
};

var domNode = document.getElementById('tweetBox');
var component = React.render(React.createElement(TweetBox, { tweetSubmitted: tweetSubmitted }), domNode);
