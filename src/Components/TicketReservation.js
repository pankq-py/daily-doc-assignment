import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/TicketReservation.css';

export const TicketReservation = () => {

    // () => {
    //     const localData = localStorage.getItem('Quantities of tickets');
    //     return localData ? JSON.parse(localData) : [];
    // }

    // useEffect(() => {
    //         localStorage.setItem('Quantities of tickets', JSON.stringify(allFormData));
    //     
    // }, [allFormData]);

    const [quantities, setQuantities] = useState([]);

    const [total, setTotal] = useState(0);

    const getQuantity = () => {
        setQuantities({
            ...quantities,
            'basic':
                document.getElementsByName("basic")[0].value,
            'delux':
                document.getElementsByName("delux")[0].value,
            'super_delux':
                document.getElementsByName("super_delux")[0].value,
        }
        );
        getTotal();
    }

    const getTotal = () => {
        setTotal(((quantities.basic * 100) + (quantities.delux * 150) + (quantities.super_delux * 200)) || 0);
        // console.log(total);
    }

    useEffect(() => {
        getTotal();
        localStorage.setItem('Quantities of tickets', JSON.stringify(quantities));
    });

    return (
        <>
            <div className="elem-group ">
                <h1>Select Ticket and Quantity</h1>
                <div className='elem-group inlined container'>
                    <div className="row">
                        <div className="col">
                            <label>Basic</label>
                        </div>
                        <div className="col">
                            <select
                                name="basic"
                                defaultValue={0}
                                onChange={getQuantity}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </select>
                        </div>
                        <div className="col">
                            <label>100 x {quantities.basic}</label>
                        </div>
                    </div>
                </div>
                <div className='elem-group inlined container'>
                    <div className="row">
                        <div className="col">
                            <label>Delux</label>
                        </div>
                        <div className="col">
                            <select
                                name="delux"
                                defaultValue={0}
                                onChange={getQuantity}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </select>
                        </div>
                        <div className="col">
                            <label>150 x {quantities.delux}</label>
                        </div>
                    </div>
                </div>
                <div className='elem-group inlined container'>
                    <div className="row">
                        <div className="col">
                            <label>Super Delux</label>
                        </div>
                        <div className="col">
                            <select
                                name="super_delux"
                                defaultValue={0}
                                onChange={getQuantity}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </select>
                        </div>
                        <div className="col">
                            <label>200 x {quantities.super_delux}</label>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='elem-group inlined container'>
                    <div className='row'>
                        <div className="col-4"></div>
                        <div className="col-4">
                            <label className='button'>Total: </label>
                        </div>
                        <div className="col-4">
                            <label>
                                Rs. {total}
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to='/ticket-details'>
                        <button type="submit">
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
