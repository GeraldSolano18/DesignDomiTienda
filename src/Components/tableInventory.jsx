import React from 'react'
import "../Styles/TableStyle.scss"

export default function TableInventory(props) {
    return(
        <table className="tablainventario">
            <thead className="tableprueba">
                <tr>
                    <th>
                    Inventario
                    </th>
                    <th>
                    Descripcion de inventrio
                    </th>
                </tr>
            
            </thead>
            <tbody>
                {
                    props.data.map(row =>(
                        <tr>
                            <td>
                                {row.NombreInventario}
                            </td>
                            <td>
                                {row.DescripcionInventario}
                            </td>
                        </tr>
                    )

                    )
                }
            </tbody>
        </table>
    )
}