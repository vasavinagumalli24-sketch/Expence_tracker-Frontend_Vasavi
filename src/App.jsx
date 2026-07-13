import { useState, useEffect } from "react";
import api from "./services/api";
import Navbar from "./components/Navbar";
import SummaryCards from "./components/SummaryCards";
import TransactionForm from "./components/TransactionForm";
import TransactionTable from "./components/TransactionTable";

function App() {

    const [transactions, setTransactions] = useState([]);
    const [editData, setEditData] = useState(null);
    async function getTransactions(){

    try{

        const response = await api.get("/transactions");

        setTransactions(response.data);

    }
    catch(error){

        console.log(error);

    }

}
useEffect(function(){

    getTransactions();

},[]);

    async function addTransaction(newTransaction){

    try{

        await api.post("/transactions", newTransaction);

        getTransactions();

    }
    catch(error){

        console.log(error);

    }

}
async function deleteTransaction(id){

    try{

        await api.delete("/transactions/" + id);

        getTransactions();

    }
    catch(error){

        console.log(error);

    }

}
async function updateTransaction(data){

    try{

        await api.put("/transactions/" + data._id, data);

        getTransactions();

        setEditData(null);

    }
    catch(error){

        console.log(error);

    }

}
function editTransaction(item){

    setEditData(item);

}

    return (

        <div>

            <Navbar />

            <SummaryCards transactions={transactions}/>

            <TransactionForm
                addTransaction={addTransaction}
                updateTransaction={updateTransaction}
                editData={editData}
            />

            <TransactionTable
                transactions={transactions}
                deleteTransaction={deleteTransaction}
                editTransaction={editTransaction}
            />

        </div>

    );

}

export default App;