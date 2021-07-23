import React from "react";

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Price per unit</th>
          <th>Total</th>
          <th>Edit/Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.itemList.map((entry, index) => {
          return (
            <tr key={entry.id}>
              <td>{index + 1}</td>
              <td
                className="itemName"
                onDoubleClick={(e) => {
                  e.currentTarget.contentEditable = true;
                }}
                title="Double click to make edits."
              >
                {entry.itemName}
              </td>
              <td
                className="units"
                onDoubleClick={(e) => {
                  e.currentTarget.contentEditable = true;
                }}
                title="Double click to make edits."
              >
                {entry.units}
              </td>
              <td
                className="price"
                onDoubleClick={(e) => {
                  e.currentTarget.contentEditable = true;
                }}
                title="Double click to make edits."
              >
                {entry.price}
              </td>
              <td>{entry.units * entry.price}</td>
              <td>
                <input
                  type="button"
                  value="Edit"
                  onClick={(e) => {
                    const row = e.currentTarget.closest("tr");
                    const itemNameTD = row.querySelector(".itemName");
                    const unitsTD = row.querySelector(".units");
                    const priceTD = row.querySelector(".price");

                    itemNameTD.contentEditable = false;
                    unitsTD.contentEditable = false;
                    priceTD.contentEditable = false;

                    const id = entry.id;
                    const itemName = itemNameTD.innerText;
                    const units = +unitsTD.innerText;
                    const price = +priceTD.innerText;
                    props.editEntry({
                      id,
                      itemName,
                      units,
                      price,
                    });
                  }}
                />
                <input
                  type="button"
                  value="Delete"
                  onClick={(e) => {
                    props.deleteEntry(entry.id);
                  }}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td id="gtotal">GrandTotal =</td>
          <td>
            {props.itemList.reduce((grandTotal, item) => {
              return grandTotal + item.price * item.units;
            }, 0)}
          </td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
}
export default Table;