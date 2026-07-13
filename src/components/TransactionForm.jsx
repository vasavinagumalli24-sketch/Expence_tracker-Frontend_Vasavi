import { useState, useEffect } from "react";

function TransactionForm(props){

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState("");

    useEffect(function(){

        if(props.editData){

            setTitle(props.editData.title);
            setAmount(props.editData.amount);
            setCategory(props.editData.category);
            setType(props.editData.type);
            setDate(props.editData.date);

        }

    }, [props.editData]);

    function saveData(){

        let data = {

            title: title,
            amount: amount,
            category: category,
            type: type,
            date: date

        };

        if(props.editData){

            data._id = props.editData._id;

            props.updateTransaction(data);

        }
        else{

            props.addTransaction(data);

        }

        setTitle("");
        setAmount("");
        setCategory("");
        setType("");
        setDate("");

    }

    return(

        <div className="form-box">

            <h2>

                {props.editData ? "Edit Transaction" : "Add Transaction"}

            </h2>

            <input
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />

            <input
                type="number"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
            />

            <select
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
            >

                <option value="">Select Category</option>

                <option>Salary</option>
                <option>Food</option>
                <option>Shopping</option>
                <option>Travel</option>
                <option>Rent</option>
                <option>Others</option>

            </select>

            <select
                value={type}
                onChange={(e)=>setType(e.target.value)}
            >

                <option value="">Select Type</option>

                <option>Income</option>
                <option>Expense</option>

            </select>

            <input
                type="date"
                value={date}
                onChange={(e)=>setDate(e.target.value)}
            />

            <button onClick={saveData}>

                {props.editData ? "Update Transaction" : "Add Transaction"}

            </button>

        </div>

    );

}

export default TransactionForm;