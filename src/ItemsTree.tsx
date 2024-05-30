import { useState } from 'react';

export const ItemsTree = ({data}) => {

    const renderTree = (object) => {
        if (object.children?.length === 0) {
            return (
                <div style={{marginLeft: '20px'}} key={object.id}>
                    <p>{object.name}</p>
                </div>
            )
        } else {
            return (
            <div style={{marginLeft: '20px'}} key={object.id}>
                <p>{object.name}</p>
                {
                    object.children.map(child => renderTree(child))
                }
            </div>
            )
        }
    }

    return (
      <div>
        { renderTree(data) } 
      </div>
    )
}