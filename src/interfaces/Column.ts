export interface ISlot {
  customRender?: string;
  filterIcon?: string;
  filterDropdown?: string;
}

export interface IColumnChild {
  title: string;
  dataIndex?: string;
  key: string;
}

export interface IColumn {
  title: string;
  dataIndex?: string;
  key: string;
  slots?: ISlot;
  sorter?: boolean | any;
  fixed?: string;
  ellipsis?: boolean;
  customFilterDropdown?: boolean;
  children?: IColumnChild;
}
