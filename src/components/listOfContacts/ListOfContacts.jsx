import React from 'react';
import propTypes from 'prop-types'
import styled from 'styled-components';

const ContactItem = styled.li`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
width:50%;
margin:5px auto;
`;

const List = styled.ul`
list-style: none;
text-align:center;
color:${({theme})=>theme.colors.primary}
`

const DeleteButton = styled.button`
margin:0 30px;
padding:5px;
font-size:16px;
background-color:${({ theme }) => theme.colors.tertiary};
color:${({ theme }) => theme.colors.secondary};
border-radius:5px;
`;

export const ListOfContacts = ({ list, onDeleteContact }) => {
    return (
        <List>
            {list.map(contact => (
                <ContactItem key={contact.id}>
                    <span>{contact.name}</span>
                    <span> </span>
                    <span>{contact.tel}</span>
                    <DeleteButton
                        type="button"
                        onClick={() => onDeleteContact(contact.id)}
                    >Delete</DeleteButton>
                </ContactItem>
            ))}
        </List>
    )
};

ListOfContacts.propTypes = {
    list: propTypes.array.isRequired,
    onDeleteContact: propTypes.shape.isRequired,
};