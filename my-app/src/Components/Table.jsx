import * as React from 'react';
import '../styles/table.css';
import Cell from "./Cell";

export default function Table({headings, rows, onActiveLink}) {
        const renderHeadingRow = (_cell, cellIndex) => {

        return (
            <Cell
                key={`heading-${cellIndex}`}
                content={headings[cellIndex]}
                header={true}
            />
        )
    };

    const renderRow = (_row, rowIndex) => {
        return (
            <tr key={`row-${rowIndex}`} onClick={()=>onActiveLink(rowIndex)}>
                {rows[rowIndex].map((_cell, cellIndex) => {
                    return (
                        <Cell
                            key={`${rowIndex}-${cellIndex}`}
                            content={rows[rowIndex][cellIndex]}
                        />
                    )
                })}
            </tr>
        )
    };

    return ( <table className="Table">
                <thead>
                <tr key="heading">
                    {headings.map(renderHeadingRow)}
                </tr>
                </thead>
                <tbody>{rows.map(renderRow)}</tbody>
            </table>
        );
}