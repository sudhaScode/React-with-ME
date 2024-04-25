


function TableRow({ columns }) {
    return (
        <tr key={rowIndex}>
            {Array.from(columns).map((_, columnIndex) => { <td key={columnIndex}>0</td> })}
        </tr>
    );
}