import React, { useState } from 'react';
import { Window } from '@progress/kendo-react-dialogs';
const windowcomponent = () =>
{
    const [visible, setVisible] = useState(true);
    const toggleDialog = () => {
        setVisible(!visible);
    };
    return(
        <section>
        <button className="k-button" onClick={toggleDialog}>Open Window</button>
         {/* <Window title={"Status"} onClose={toggleDialog} initialHeight={350}>
                            <form className="k-form">
                                <fieldset>
                                    <legend>User Details</legend>

                                    <label className="k-form-field">
                                        <span>First Name</span>
                                        <input className="k-textbox" placeholder="Your Name" />
                                    </label>
                                    <label className="k-form-field">
                                        <span>Last Name</span>
                                        <input className="k-textbox" placeholder="Your Last Name" />
                                    </label>
                                </fieldset>

                                <div className="text-right">
                                    <button type="button" className="k-button" onClick={toggleDialog}>Cancel</button>
                                    <button type="button" className="k-button k-primary" onClick={toggleDialog}>Submit</button>
                                </div>
                            </form>
                    </Window>  */}

        </section>
    );
}

export default windowcomponent;