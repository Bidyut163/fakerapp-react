import React from 'react';
import { faker } from '@faker-js/faker';

const Card = () => {
    return (
        <div className="card">
            <div className="image">
                <img src={faker.image.avatar()}></img>
            </div>
            <div className="content">
                <a className="header">{faker.name.findName()}</a>
                <div className="meta">
                    <span className="date">Joined in {faker.date.month()}</span>
                </div>
                <div className="description">{faker.random.words(10)}</div>
            </div>
            <div className="extra content">
                <a>
                    <i className="user icon"></i>
                    {faker.random.number(100)} friends
                </a>
            </div>
        </div>
    );
};

export default Card;
