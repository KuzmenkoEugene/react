var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var carTitleStyle = {
    background: '#4350af',
    color: '#ffffff'
};

var modelCarStyle = {
    background: '#d63864',
    color: '#ffffff'
};

var CARS = [{
    id: 1,
    brand: "Audi",
    models: [{
        id: 1,
        name: "A1",
        collection: [{
            id: 1,
            version: "Sportback",
            year: 2019,
            horsepower: 95,
            engine: 999
        }, {
            id: 2,
            version: "Citycarver",
            year: 2019,
            horsepower: 95,
            engine: 999
        }]
    }, {
        id: 2,
        name: "Q5",
        collection: [{
            id: 1,
            version: "FY 2021",
            year: 2021,
            horsepower: 299,
            engine: 1984
        }, {
            id: 2,
            version: "Sportback",
            year: 2021,
            horsepower: 299,
            engine: 1984
        }]
    }, {
        id: 3,
        name: "TT",
        collection: [{
            id: 1,
            version: "Coupe",
            year: 2021,
            horsepower: 197,
            engine: 1984
        }, {
            id: 2,
            version: "Roadster",
            year: 2021,
            horsepower: 197,
            engine: 1984
        }]
    }]
}, {
    id: 2,
    brand: "BMW",
    models: [{
        id: 1,
        name: "8 series",
        collection: [{
            id: 1,
            version: "G1X LCI",
            year: 2022,
            horsepower: 333,
            engine: 2998
        }, {
            id: 2,
            version: "G1X",
            year: 2019,
            horsepower: 340,
            engine: 2998
        }]
    }, {
        id: 2,
        name: "X6",
        collection: [{
            id: 1,
            version: "G06 LCI",
            year: 2023,
            horsepower: 530,
            engine: 4395
        }, {
            id: 2,
            version: "G06",
            year: 2020,
            horsepower: 286,
            engine: 2993
        }]
    }]
}];

var App = React.createElement(
    React.Fragment,
    null,
    React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Car Specs'
        )
    ),
    React.createElement(
        'div',
        null,
        React.createElement(
            'table',
            null,
            React.createElement(
                'tbody',
                null,
                CARS.filter(function (item) {
                    return item.id != 2;
                }).map(function (el, index) {
                    return React.createElement(
                        'tr',
                        { style: carTitleStyle, key: index },
                        React.createElement(
                            'th',
                            { key: index, colSpan: 2 },
                            el.brand
                        )
                    );
                }),
                CARS.filter(function (item) {
                    return item.id != 2;
                }).map(function (el) {
                    return el.models.map(function (obj, index) {
                        return React.createElement(
                            'tr',
                            { key: index },
                            React.createElement(
                                'th',
                                { style: modelCarStyle, key: index },
                                obj.name
                            ),
                            React.createElement(
                                'td',
                                null,
                                obj.collection.map(function (el, index) {
                                    return React.createElement(
                                        'ul',
                                        { key: index },
                                        React.createElement(
                                            'li',
                                            null,
                                            'Version: ',
                                            el.version
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            'Year: ',
                                            el.year
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            'Horsepower: ',
                                            el.horsepower
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            'Engine: ',
                                            el.engine
                                        )
                                    );
                                })
                            )
                        );
                    });
                }),
                CARS.filter(function (item) {
                    return item.id != 1;
                }).map(function (el, index) {
                    return React.createElement(
                        'tr',
                        { style: carTitleStyle, key: index },
                        React.createElement(
                            'th',
                            { key: index, colSpan: 2 },
                            el.brand
                        )
                    );
                }),
                CARS.filter(function (item) {
                    return item.id != 1;
                }).map(function (el) {
                    return el.models.map(function (obj, index) {
                        return React.createElement(
                            'tr',
                            { key: index },
                            React.createElement(
                                'th',
                                { style: modelCarStyle, key: index },
                                obj.name
                            ),
                            React.createElement(
                                'td',
                                null,
                                obj.collection.map(function (el, index) {
                                    return React.createElement(
                                        'ul',
                                        { key: index },
                                        React.createElement(
                                            'li',
                                            null,
                                            'Version: ',
                                            el.version
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            'Year: ',
                                            el.year
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            'Horsepower: ',
                                            el.horsepower
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            'Engine: ',
                                            el.engine
                                        )
                                    );
                                })
                            )
                        );
                    });
                })
            )
        )
    )
);

root.render(App);