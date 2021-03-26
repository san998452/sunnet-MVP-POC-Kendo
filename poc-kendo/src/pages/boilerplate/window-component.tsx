import React, { useState } from 'react';
import { Window } from '@progress/kendo-react-dialogs';
import Formcomponent from './form-component';
const windowcomponent = () =>
{
    const [visible, setVisible] = useState(false);
    const toggleDialog = () => {
        setVisible(!visible);
    };
    return(
        <section>
        <button className="k-button" onClick={toggleDialog}>Open Window</button>
            {visible && <Window 
            title={"Status"} 
            onClose={toggleDialog} 
            initialHeight={350}
            width={600}
            >
                <Formcomponent />
            </Window>
}

        </section>
    );
}

export default windowcomponent;