import React, { useState, useEffect } from 'react';

const List = ({ people, onPeopleChange }) => {
    const [unmountedArticles, setUnmountedArticles] = useState([]);

    const handleUnmount = (id) => {
        setUnmountedArticles([...unmountedArticles, id]);
        const newPeople = people.filter((person) => person.id !== id);
        onPeopleChange(newPeople);
    }
    useEffect(() => {
        const newPeople = people.filter((person) => !unmountedArticles.includes(person.id));
        onPeopleChange(newPeople);
    }, [unmountedArticles, onPeopleChange, people]);

    return (
        <>
            {people.map(person => {
                const { id, name, age, image } = person;
                if (unmountedArticles.includes(id)) {
                    return null;
                }

                return (
                    < article key={id} className='person' >
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                        <button className='btn_once' onClick={() => handleUnmount(id)}>X</button>

                    </article >
                );
            })}
        </>
    );
};

export default List;