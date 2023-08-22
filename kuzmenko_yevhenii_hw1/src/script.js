const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const carTitleStyle = {  
    background: '#4350af',
    color: '#ffffff'
}   

const modelCarStyle = {  
    background: '#d63864',
    color: '#ffffff'
}   

const CARS = [
    {
        id: 1,
        brand: "Audi",
        models: [
            {
                id: 1,
                name: "A1",
                collection: [
                    {
                        id: 1,
                        version: "Sportback",
                        year: 2019,
                        horsepower: 95,
                        engine: 999
                    },
                    {
                        id: 2,
                        version: "Citycarver",
                        year: 2019,
                        horsepower: 95,
                        engine: 999
                    }
                ]
            },
            {
                id: 2,
                name: "Q5",
                collection: [
                    {
                        id: 1,
                        version: "FY 2021",
                        year: 2021,
                        horsepower: 299,
                        engine: 1984
                    },
                    {
                        id: 2,
                        version: "Sportback",
                        year: 2021,
                        horsepower: 299,
                        engine: 1984
                    }
                ]
            },
            {
                id: 3,
                name: "TT",
                collection: [
                    {
                        id: 1,
                        version: "Coupe",
                        year: 2021,
                        horsepower: 197,
                        engine: 1984
                    },
                    {
                        id: 2,
                        version: "Roadster",
                        year: 2021,
                        horsepower: 197,
                        engine: 1984
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        brand: "BMW",
        models: [
            {
                id: 1,
                name: "8 series",
                collection: [
                    {
                        id: 1,
                        version: "G1X LCI",
                        year: 2022,
                        horsepower: 333,
                        engine: 2998
                    },
                    {
                        id: 2,
                        version: "G1X",
                        year: 2019,
                        horsepower: 340,
                        engine: 2998
                    }
                ]
            },
            {
                id: 2,
                name: "X6",
                collection: [
                    {
                        id: 1,
                        version: "G06 LCI",
                        year: 2023,
                        horsepower: 530,
                        engine: 4395
                    },
                    {
                        id: 2,
                        version: "G06",
                        year: 2020,
                        horsepower: 286,
                        engine: 2993
                    }
                ]
            }
        ]
    },
];

const App = <React.Fragment>
    <div>
        <h1>Car Specs</h1>
    </div>
    <div>
        <table>
            <tbody>
                {
                    CARS
                        .filter(item => item.id != 2)
                        .map((el, index) => 
                            <tr style={carTitleStyle} key={index}>
                                <th key={index} colSpan={2}>{el.brand}</th>
                            </tr>    
                        )
                }
                {   
                    CARS
                    .filter(item => item.id != 2)
                    .map((el) => el.models.map((obj, index) => 
                        <tr key={index}>
                            <th style={modelCarStyle} key={index}>{obj.name}</th>
                            <td>
                                {
                                    obj.collection.map((el, index) => 
                                            <ul key={index}>
                                                <li>
                                                    Version: {el.version}
                                                </li>
                                                <li>
                                                    Year: {el.year}
                                                </li>
                                                <li>
                                                    Horsepower: {el.horsepower}
                                                </li>
                                                <li>
                                                    Engine: {el.engine}
                                                </li>
                                            </ul>
                                        )
                                }
                            </td>
                        </tr>
                    ))
                }
                {
                    CARS
                        .filter(item => item.id != 1)
                        .map((el, index) => 
                            <tr style={carTitleStyle} key={index}>
                                <th key={index} colSpan={2}>{el.brand}</th>
                            </tr>    
                        )
                }
                {   
                    CARS
                    .filter(item => item.id != 1)
                    .map((el) => el.models.map((obj, index) => 
                        <tr key={index}>
                            <th style={modelCarStyle} key={index}>{obj.name}</th>
                            <td>
                                {
                                    obj.collection.map((el, index) => 
                                            <ul key={index}>
                                                <li>
                                                    Version: {el.version}
                                                </li>
                                                <li>
                                                    Year: {el.year}
                                                </li>
                                                <li>
                                                    Horsepower: {el.horsepower}
                                                </li>
                                                <li>
                                                    Engine: {el.engine}
                                                </li>
                                            </ul>
                                        )
                                }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
</React.Fragment>

root.render(App);