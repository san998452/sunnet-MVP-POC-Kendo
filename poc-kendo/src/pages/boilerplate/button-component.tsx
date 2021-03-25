import { Button } from '@progress/kendo-react-buttons';
const buttoncomponent =() =>
{
    return(
        <section>
            <h5>Primary Button</h5>
            <Button primary={true}>Primary Button</Button>
            <h5>Secondary Button</h5>
            <Button primary={false} className="k-button k-border-primary">Secondary Button</Button>
        </section>
    );
}

export default buttoncomponent;