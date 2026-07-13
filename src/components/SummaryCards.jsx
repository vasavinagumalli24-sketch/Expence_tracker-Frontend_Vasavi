function SummaryCards(props) {

    let income = 0;
    let expense = 0;

    props.transactions.forEach(function(item){

        if(item.type === "Income"){
            income = income + Number(item.amount);
        }
        else{
            expense = expense + Number(item.amount);
        }

    });

    let balance = income - expense;
    let savings = balance;

    return(

        <div className="cards">

            <div className="card">
                <h3>Balance</h3>
                <h2>₹{balance}</h2>
            </div>

            <div className="card">
                <h3>Income</h3>
                <h2 className="income">
                    ₹{income}
                </h2>
            </div>

            <div className="card">
                <h3>Expense</h3>
                <h2 className="expense">
                    ₹{expense}
                </h2>
            </div>

            <div className="card">
                <h3>Savings</h3>
                <h2 className="saving">
                    ₹{savings}
                </h2>
            </div>

        </div>

    );

}

export default SummaryCards;