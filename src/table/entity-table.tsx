import * as React from "react";
import { Table } from "reactstrap";

export type PrimitiveKeys<T extends { [k: string]: any }> = keyof T extends Function ? never : keyof T;
export type CustomColumn<T> = {
  heading: string;
  renderCell: React.SFC<T>;
};

export type RenderableColumn<T> = PrimitiveKeys<T> | CustomColumn<T>;

export interface EntityTableProps<T> {
  rows: T[];
  columns: RenderableColumn<T>[];
  isLoaded: boolean;
}

const isCustomColumn = (value: any): value is CustomColumn<any> => {
  return value.heading && value.renderCell;
};

export class EntityTable<T> extends React.Component<EntityTableProps<T>> {
  renderHeadings = () => {
    const { columns } = this.props;
    return (
      <tr>
        {columns.map((column) => {
          return this.renderHeadingCell(column);
        })}
      </tr>
    );
  };

  renderHeadingCell = (column: RenderableColumn<T>) => {
    return <td>{isCustomColumn(column) ? column.heading : column}</td>;
  };

  renderRows = () => {
    const { columns, rows } = this.props;
    return rows.map((row) => {
      return (
        <tr>
          {columns.map((column) => {
            return this.renderBodyCell(column, row);
          })}
        </tr>
      );
    });
  };

  renderBodyCell = (column: RenderableColumn<T>, row: T) => {
    return <td>{isCustomColumn(column) ? column.renderCell(row) : row[column]}</td>;
  };

  render() {
    return (
      <Table>
        <thead>{this.renderHeadings()}</thead>
        <tbody>{this.renderRows()}</tbody>
      </Table>
    );
  }
}
