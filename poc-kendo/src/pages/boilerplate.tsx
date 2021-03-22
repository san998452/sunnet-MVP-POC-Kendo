import * as React from 'react';
import { Drawer, DrawerContent } from '@progress/kendo-react-layout';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Error } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';

const items = [
    { text: 'Inbox', icon: 'k-i-inbox', selected: true },
    { separator: true },
    { text: 'Notifications', icon: 'k-i-bell' },
    { text: 'Calendar', icon: 'k-i-calendar' },
    { separator: true },
    { text: 'Attachments', icon: 'k-i-hyperlink-email' },
    { text: 'Favourites', icon: 'k-i-star-outline' }
];
const boilerplate = () => {
    const [expanded, setExpanded] = React.useState(true);
    const [selectedId, setSelectedId] = React.useState(items.findIndex(x => x.selected === true));

    const handleClick = () => { setExpanded(prevState => !prevState); };

    const handleSelect = (ev) => {
        setSelectedId(ev.itemIndex);
        setExpanded(false);
    };
    const onOverlayClick = () => {
        setExpanded(prevState => !prevState);
    };
    const dummyText = `<p>Lorem epsum dolar sit lorem epsum dolar sit  lorem epsum dolar sit
    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit</p>`;

    return (
        <div>
            <button className="k-button" onClick={handleClick}>Toggle the Drawer state</button>

            <Drawer
                expanded={expanded}
                position={'start'}
                mode={'overlay'}
                mini={false}
                items={items.map(
                    (item, index) => ({ ...item, selected: index === selectedId }))}
                onSelect={handleSelect}
             
                className="drawer-md"
            >
                <DrawerContent>
                    <h1>Drawer heading will come here</h1>
                    <p>Lorem epsum dolar sit lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit</p>
                    <p>
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit  
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit  
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit  
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit 
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit  
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit </p> 
                    <p>lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit  
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit  
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit  
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit  
                    lorem epsum dolar sit  lorem epsum dolar sit  lorem epsum dolar sit
                    </p> </DrawerContent>
            </Drawer>
        </div>
    )
}

export default boilerplate