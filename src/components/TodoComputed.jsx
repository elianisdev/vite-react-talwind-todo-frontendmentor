import React from 'react';

const TodoComputed = ({computedItemsLeft, clearCompleted}) => {
    return (
        <section className="dark:bg-gray-800 py-4 px-4 flex gap-4 bg-white rounded-button-md bg-white transition-all duration-1000">
            <span className="text-gray-400">{computedItemsLeft}
                5 item left</span>
            <button className="text-gray-400" onClick={clearCompleted}>Clear Completed</button>
        </section>
    )
};

export default TodoComputed;