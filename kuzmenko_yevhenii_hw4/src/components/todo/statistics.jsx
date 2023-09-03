const Statistics = ({ data }) => {
    
    const inProgressTasks = data.filter(el => el.completed === true);
    const completedTasks = data.filter(el => el.completed === false);

    return (
        <table>
            <tbody>
                <tr>
                    <td>All tasks: {data.length}</td>
                </tr>
                <tr>
                    <td>Completed tasks: {completedTasks.length}</td>
                </tr>
                <tr>
                    <td>In progress tasks: {inProgressTasks.length}</td>
                </tr>
            </tbody>
        </table>
    );
}

export {
    Statistics
}
