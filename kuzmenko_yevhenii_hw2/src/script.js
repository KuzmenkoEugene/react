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
            standartColorItem: '#e9e9e9'
        }

    }

    render() {
        
        return this.state.animals.length 
            ? <table>
                <tbody>
                    {this.state.animals.map((el, index) => (
                        <tr style={{backgroundColor: this.state.standartColorItem}} key={index}>
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
