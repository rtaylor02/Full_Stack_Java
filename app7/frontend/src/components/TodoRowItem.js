function TodoRowItem(props) {
    return (
        <tr>
            <th scope='row'>{props.rowNum}</th>
            <td>{props.rowDesc}</td>
            <td>{props.rowAsg}</td>
        </tr>
    )
}

export default TodoRowItem;