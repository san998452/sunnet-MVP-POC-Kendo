import * as React from 'react';
import {
    GridColumnMenuFilter,
    GridColumnMenuCheckboxFilter
} from '@progress/kendo-react-grid';

export  const ColumnMenu = (props:any) => {
        return (
            <div>
                <GridColumnMenuFilter {...props} expanded={true}/>
            </div>
        );
}

// export class ColumnMenuCheckboxFilter extends React.Component {
//     render() {
//         return (
//             <div>
//                 <GridColumnMenuCheckboxFilter {...this.props} data={products} expanded={true}/>
//             </div>
//         );
//     }
// }