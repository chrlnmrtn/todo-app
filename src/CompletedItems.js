import React from "react";

export const CompletedItems =  (props) => {
    return(

            <section>
                <h2>Completed Items</h2>

                <ul>
                    { props.items.map((item) =>{
                        return (
                            <li key={item.id}>
                                {item.description}
                            </li>
                        )
                    })}
                </ul>
            </section>
    )};