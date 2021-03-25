import * as React from 'react';
import {
    GridColumnMenuSort,
    GridColumnMenuFilter, GridColumnMenuItemGroup, GridColumnMenuItem, GridColumnMenuItemContent
} from '@progress/kendo-react-grid';

export const CustomColumnMenu = (props:any) =>{
            const [columns,setColumns]=React.useState(props.columns)
            const [columnsExpanded,setColumnsExpanded]=React.useState(false)
            const [filterExpanded,setFilterExpanded]=React.useState( false)
        
  const  onToggleColumn = (id) => {
            setColumns(columns.map((column, idx) => {
                return idx === id ? { ...column, show: !column.show } : column;
            })
        )
    }

    const onReset = (event) => {
        event.preventDefault();
        const allColumns = props.columns.map(col => {
            return {
                ...col,
                show: true
            };
        });

        setColumns( allColumns), (e) => onSubmit(e);
    }

  const  onSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        props.onColumnsSubmit(columns);
        if (props.onCloseMenu) {
            props.onCloseMenu();
        }
    }

  const  onMenuItemClick = () => {
        const value = !columnsExpanded;
           setColumnsExpanded (value)
            // filterExpanded: value ? false : this.state.filterExpanded
    }

    // onFilterExpandChange = (value) => {
    //     this.setState({
    //         filterExpanded: value,
    //         columnsExpanded: value ? false : this.state.columnsExpanded
    //     });
    // }

    // render() {
        const oneVisibleColumn = columns.filter(c => c.show).length === 1;

        return (
            <div>
                <GridColumnMenuItemGroup>
                    <GridColumnMenuItem
                        title={'Show / hide Columns'}
                        iconClass={'k-i-columns'}
                        onClick={onMenuItemClick}
                    />
                    <GridColumnMenuItemContent show={columnsExpanded}>
                        {/* <div className={'k-column-list-wrapper'}> */}
                        <div>
                            <form onSubmit={onSubmit} onReset={onReset}>
                                {/* <div className={'k-column-list'}> */}
                                <div>
                                    {columns.map((column, idx) =>
                                        (
                                            // <div key={idx} className={'k-column-list-item'}>
                                            <div key={idx}>
                                                <span>
                                                    <input
                                                        id={`column-visiblity-show-${idx}`}
                                                        className="k-checkbox"
                                                        type="checkbox"
                                                        readOnly={true}
                                                        disabled={column.show && oneVisibleColumn}
                                                        checked={column.show}
                                                        onClick={() => {onToggleColumn(idx); }}
                                                    />
                                                    <label
                                                        htmlFor={`column-visiblity-show-${idx}`}
                                                        className="k-checkbox-label"
                                                        style={{ userSelect: 'none' }}
                                                    >
                                                        {column.title}
                                                    </label>
                                                </span>
                                            </div>
                                        )
                                    )}
                                </div>
                                <div className={'k-columnmenu-actions'}>
                                    <button type={'reset'} className={'k-button'}>All column</button>
                                    <button className={'k-button k-primary'}>Save</button>
                                </div>
                            </form>
                        </div>
                    </GridColumnMenuItemContent>
                </GridColumnMenuItemGroup>
            </div>
        );
    }
