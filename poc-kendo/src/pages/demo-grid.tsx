import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import data from '../../data/products.json'

const DemoGrid = () => {
   
    return (
        <div className="kendo-ui-grid">
            <Grid  data={data}>
                <Column width="50" field="ProductID" title="ID" filterable={false} editable={false}/>
                <Column field="ProductName" title="Name" />
                <Column field="SupplierID" title="Supplier ID" filter='numeric' editor='numeric' />
                <Column field="CategoryID" title="Category ID" filter='numeric'  editor='numeric' />
                <Column field="QuantityPerUnit" title="Quantity Per Unit" filter='numeric'  editor='numeric' />
                <Column field="UnitPrice" title="Unit Price" filter='numeric'  editor='numeric' />
                <Column field="UnitsInStock" title="In stock" filter='numeric'  editor='numeric' />
                <Column field="UnitsInStock" title="In stock" filter='numeric'  editor='numeric' />
                <Column field="UnitsInStock" title="In stock" filter='numeric'  editor='numeric' />

            </Grid>
        </div>
    )
}

export default DemoGrid