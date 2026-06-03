import React from 'react';

export interface DataTableColumn<T> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  width?: string;
}

export interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  data: T[];
  onRowClick?: (item: T) => void;
}

/**
 * DataTable
 * 
 * A structured data grid that follows ADS aesthetics.
 * Automatically applies themed borders, hover effects, and typography.
 */
export function DataTable<T>({ columns, data, onRowClick }: DataTableProps<T>) {
  return (
    <div className="ads-data-table-wrapper" style={{ overflowX: 'auto' }}>
      <table style={{ 
        width: '100%', 
        borderCollapse: 'collapse',
        fontFamily: 'var(--ads-font-mono)',
        fontSize: '0.9rem'
      }}>
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th key={i} style={{
                textAlign: 'left',
                padding: '0.75rem',
                border: '1px solid var(--ads-color-border)',
                background: 'var(--ads-color-surface)',
                color: 'var(--ads-color-primary)',
                textTransform: 'uppercase',
                position: 'sticky',
                top: 0
              }}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr 
              key={rowIndex} 
              onClick={() => onRowClick?.(row)}
              style={{ 
                cursor: onRowClick ? 'pointer' : 'default',
                transition: 'background 0.2s'
              }}
              className="ads-table-row"
            >
              {columns.map((col, colIndex) => (
                <td key={colIndex} style={{
                  padding: '0.75rem',
                  border: '1px solid var(--ads-color-border)'
                }}>
                  {typeof col.accessor === 'function' 
                    ? col.accessor(row) 
                    : (row[col.accessor] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <style>{`
        .ads-table-row:hover {
          background: rgba(var(--ads-color-primary-rgb, 57, 255, 20), 0.1);
        }
        [data-skin="win95"] .ads-table-row:hover {
          background: var(--ads-color-primary);
          color: #fff;
        }
      `}</style>
    </div>
  );
}
