import React, { useEffect, useState } from 'react'

export const TicketDetails = (props) => {
  const [ticketArr, setTicketArr] = useState([])
  const style = {
    textAlign: "left",
    margin: "-10px 10px",
    border: "1px solid white"
  }

  const [quantities, setQuantities] = useState([]);

  // const setTicketsArray = (e) => {
  //   let tempArr = [];
  //   for (let i = 0; i < quantities.basic; i++) {
  //     tempArr.push({
  //       fname: "",
  //       lname: "",
  //       ticket: "Basic"
  //     })
  //   }
  //   for (let i = 0; i < quantities.delux; i++) {
  //     tempArr.push({
  //       fname: "",
  //       lname: "",
  //       ticket: "Delux"
  //     })
  //   }
  //   for (let i = 0; i < quantities.super_delux; i++) {
  //     tempArr.push({
  //       fname: "",
  //       lname: "",
  //       ticket: "Super Delux"
  //     })
  //   }
  //   setTicketArr(tempArr)
  //   console.log(ticketArr);
  // }


  useEffect(() => {
    const quantitiesOfTickets = JSON.parse(localStorage.getItem('Quantities of tickets'));
    if (quantitiesOfTickets) {
      var tempArr = [];
      // quantitiesOfTickets.basic
      setQuantities(quantitiesOfTickets);
      for (let i = 0; i < quantities.basic; i++) {
        tempArr.push({
          fname: "",
          lname: "",
          ticket: "Basic"
        })
      }
      for (let i = 0; i < quantities.delux; i++) {
        tempArr.push({
          fname: "",
          lname: "",
          ticket: "Delux"
        })
      }
      for (let i = 0; i < quantities.super_delux; i++) {
        tempArr.push({
          fname: "",
          lname: "",
          ticket: "Super Delux"
        })
      }
      setTicketArr(tempArr);
    }
  },);

  return (
    <>
      <div className="table-responsive" style={style}>
        <table className="table table-striped" >
          <thead className="thead-light">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Ticket Type</th>
            </tr>
          </thead>
          <tbody>
            {ticketArr.map(
              (item, i) => (<tr>
                <td><input type="text" id='fname' placeholder='First Name' defaultValue={item.fname} /></td>
                <td><input type="text" id='lname' placeholder='Last Name' defaultValue={item.fname} /></td>
                <td><input type='text' id='ticket' value={item.ticket} /></td>
              </tr>
              )
            )
            }
          </tbody>
        </table>
      </div>
      {/* <div>
        <button type="button" onClick={() => console.log(
          ticketArr
        )}>
          Next
        </button>
      </div> */}
    </>
  )
}

