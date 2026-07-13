function TransactionTable(props){

    return(

        <div className="table-box">

            <h2>Transaction History</h2>

            <table>

                <thead>

                    <tr>

                        <th>Title</th>

                        <th>Amount</th>

                        <th>Category</th>

                        <th>Type</th>

                        <th>Date</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {props.transactions.map(function(item,index){

                        return(

                            <tr key={index}>

                                <td>{item.title}</td>

                                <td>₹{item.amount}</td>

                                <td>{item.category}</td>

                                <td>{item.type}</td>

                                <td>{item.date}</td>

                                <td>

                                    <button
                                        className="edit-btn"
                                        onClick={function(){

                                            props.editTransaction(item);

                                     }}
>
                                    Edit
                                    </button>

                                    <button
                                        className="delete-btn"
                                        onClick={function(){
                                            props.deleteTransaction(item._id);
                                        }}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        );

                    })}

                </tbody>

            </table>

        </div>

    );

}

export default TransactionTable;