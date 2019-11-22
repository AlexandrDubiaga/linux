import React from 'react';
let store={
    state:{
        names: [{id: 1, title: 'Solmir__', isDone: false},
            {id: 2, title: 'Hworang', isDone: true},
            {id: 3, title: 'Triton', isDone: false},
            {id: 4, title: 'Eddy Codo', isDone: true}],
        filterValue: "All",
        newText:''
    }
}

export default store;