const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const animals = [
    {type: `turtle`, icon: `🐢`},
    {type: `octopus`, icon: `🐙`},
    {type: `fish`, icon: `🐠`},
    {type: `flamingo`, icon: `🦩`},
    {type: `penguin`, icon: `🐧`}
]

class AnimalsList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            ...this.props,
            standartColorItem: {
                backgroundColor: '#e9e9e9',
            }, 
            activeItem: {
                backgroundColor: 'green',
                fontWeight: '600',
            }
        }

        setInterval(() => {

            // let noActiveItem = this.state.animals.filter((item) => !item.active)

            const indexNumber = Math.floor(Math.random() * this.state.animals.length);
            const updatedAnimals = this.state.animals
            updatedAnimals[indexNumber] = {...updatedAnimals[indexNumber], active: true}

            this.setState({
                animals: updatedAnimals
            });

            animals[indexNumber]

        }, 1000);
    }

    render() {
        
        return this.state.animals.length 
            ? <table>
                <tbody>
                    {this.state.animals.map((el, index) => (
                        <tr style={el.active ? this.state.activeItem : this.state.standartColorItem} key={index}>
                            <td>{el.type}</td>
                            <td>{el.icon}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
            : null;
    }
}

const App = (
    <React.Fragment>
        <AnimalsList animals={animals} />
    </React.Fragment>
);

root.render(App);
