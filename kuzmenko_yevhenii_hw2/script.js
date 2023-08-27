var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var animals = [{ type: 'turtle', icon: '\uD83D\uDC22' }, { type: 'octopus', icon: '\uD83D\uDC19' }, { type: 'fish', icon: '\uD83D\uDC20' }, { type: 'flamingo', icon: '\uD83E\uDDA9' }, { type: 'penguin', icon: '\uD83D\uDC27' }];

var AnimalsList = function (_React$Component) {
    _inherits(AnimalsList, _React$Component);

    function AnimalsList(props) {
        _classCallCheck(this, AnimalsList);

        var _this = _possibleConstructorReturn(this, (AnimalsList.__proto__ || Object.getPrototypeOf(AnimalsList)).call(this, props));

        _this.state = Object.assign({}, _this.props, {
            standartColorItem: {
                backgroundColor: '#e9e9e9'
            },
            activeItem: {
                backgroundColor: 'green',
                fontWeight: '600'
            }
        });

        setInterval(function () {

            // let noActiveItem = this.state.animals.filter((item) => !item.active)

            var indexNumber = Math.floor(Math.random() * _this.state.animals.length);
            var updatedAnimals = _this.state.animals;
            updatedAnimals[indexNumber] = Object.assign({}, updatedAnimals[indexNumber], { active: true });

            _this.setState({
                animals: updatedAnimals
            });

            animals[indexNumber];
        }, 1000);
        return _this;
    }

    _createClass(AnimalsList, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return this.state.animals.length ? React.createElement(
                'table',
                null,
                React.createElement(
                    'tbody',
                    null,
                    this.state.animals.map(function (el, index) {
                        return React.createElement(
                            'tr',
                            { style: el.active ? _this2.state.activeItem : _this2.state.standartColorItem, key: index },
                            React.createElement(
                                'td',
                                null,
                                el.type
                            ),
                            React.createElement(
                                'td',
                                null,
                                el.icon
                            )
                        );
                    })
                )
            ) : null;
        }
    }]);

    return AnimalsList;
}(React.Component);

var App = React.createElement(
    React.Fragment,
    null,
    React.createElement(AnimalsList, { animals: animals })
);

root.render(App);