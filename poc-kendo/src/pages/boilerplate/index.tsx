import Formcomponent from './form-component';
import Windowcomponent from './window-component';
import Buttoncomponent from './button-component';
import Drawercomponent from './drawer-component';
const boilerplate = () =>
{
    return(
        <section className="boilerplate-container">
        <h3>Form Component</h3>
        <Formcomponent />

        <h3 className="m-50">Window Component</h3>
        <Windowcomponent />

        <h3 className="m-50">Button Component</h3>
        <Buttoncomponent />

        <h3 className="m-50">Drawer Component</h3>
        <Drawercomponent />

        </section>
    );
}

export default boilerplate;