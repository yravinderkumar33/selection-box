import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
interface RootObject {
  serviceInternalId: number;
  quoteId: number;
  serviceHours: number;
  partsCost: number;
  laborCost: number;
  isSelected: string;
  totalCost: number;
  usageThreshold: number;
  schedulerTimeLineId: string;
  selectedByUser: string;
  shownInCostTable: string;
  displayValue: string;
  calculationInterval: number;
}

type RootObjectWithPosition = RootObject & { position: number };

const data: RootObject[] = [
  {
    "serviceInternalId": 693741,
    "quoteId": 1053800,
    "serviceHours": 50,
    "partsCost": 133.89,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 133.89,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCw6QAG",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "50",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693742,
    "quoteId": 1053800,
    "serviceHours": 400,
    "partsCost": 742.8,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 742.8,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCvkQAG",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "400",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693743,
    "quoteId": 1053800,
    "serviceHours": 800,
    "partsCost": 962.26,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 962.26,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCwDQAW",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "800",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693744,
    "quoteId": 1053800,
    "serviceHours": 1200,
    "partsCost": 733.16,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 733.16,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCvNQAW",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "1200",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693745,
    "quoteId": 1053800,
    "serviceHours": 1600,
    "partsCost": 1456.57,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 1456.57,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCvUQAW",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "1600",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693746,
    "quoteId": 1053800,
    "serviceHours": 2000,
    "partsCost": 3680.17,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 3680.17,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCvaQAG",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "2000",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693747,
    "quoteId": 1053800,
    "serviceHours": 2400,
    "partsCost": 1303.89,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 1303.89,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCvfQAG",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "2400",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693748,
    "quoteId": 1053800,
    "serviceHours": 2800,
    "partsCost": 550.19,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 550.19,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCvhQAG",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "2800",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693749,
    "quoteId": 1053800,
    "serviceHours": 3200,
    "partsCost": 1456.57,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 1456.57,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCvVQAW",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "3200",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693750,
    "quoteId": 1053800,
    "serviceHours": 3600,
    "partsCost": 733.16,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 733.16,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCvMQAW",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "3600",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693751,
    "quoteId": 1053800,
    "serviceHours": 4000,
    "partsCost": 4122.81,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 4122.81,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCvmQAG",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "4000",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693752,
    "quoteId": 1053800,
    "serviceHours": 4400,
    "partsCost": 391.53,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 391.53,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCvuQAG",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "4400",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693753,
    "quoteId": 1053800,
    "serviceHours": 4800,
    "partsCost": 1798.2,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 1798.2,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCw3QAG",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "4800",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693754,
    "quoteId": 1053800,
    "serviceHours": 5200,
    "partsCost": 391.53,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 391.53,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCvvQAG",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "5200",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693755,
    "quoteId": 1053800,
    "serviceHours": 5600,
    "partsCost": 1120.92,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 1120.92,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCw9QAG",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "5600",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693756,
    "quoteId": 1053800,
    "serviceHours": 6000,
    "partsCost": 3979.51,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 3979.51,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCwBQAW",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "6000",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693757,
    "quoteId": 1053800,
    "serviceHours": 6400,
    "partsCost": 1456.57,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 1456.57,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCvSQAW",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "6400",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693758,
    "quoteId": 1053800,
    "serviceHours": 6800,
    "partsCost": 391.53,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 391.53,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCvwQAG",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "6800",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693759,
    "quoteId": 1053800,
    "serviceHours": 7200,
    "partsCost": 1303.89,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 1303.89,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCveQAG",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "7200",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693760,
    "quoteId": 1053800,
    "serviceHours": 7600,
    "partsCost": 391.53,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 391.53,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCvyQAG",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "7600",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693761,
    "quoteId": 1053800,
    "serviceHours": 8000,
    "partsCost": 4617.12,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 4617.12,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCwFQAW",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "8000",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693762,
    "quoteId": 1053800,
    "serviceHours": 8400,
    "partsCost": 849.54,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 849.54,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCwJQAW",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "8400",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693763,
    "quoteId": 1053800,
    "serviceHours": 8800,
    "partsCost": 962.26,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 962.26,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCwLQAW",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "8800",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693764,
    "quoteId": 1053800,
    "serviceHours": 9200,
    "partsCost": 391.53,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 391.53,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCvzQAG",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "9200",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693765,
    "quoteId": 1053800,
    "serviceHours": 9600,
    "partsCost": 1798.2,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 1798.2,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCw4QAG",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "9600",
    "calculationInterval": 0
  },
  {
    "serviceInternalId": 693766,
    "quoteId": 1053800,
    "serviceHours": 10000,
    "partsCost": 3680.17,
    "laborCost": 0,
    "isSelected": "N",
    "totalCost": 3680.17,
    "usageThreshold": 10000,
    "schedulerTimeLineId": "a0b6S00000rBCvZQAW",
    "selectedByUser": "N",
    "shownInCostTable": "Y",
    "displayValue": "10000",
    "calculationInterval": 0
  }
]


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  startSelectionRowIndex: number = -1;
  endSelectionRowIndex: number = -1;
  displayedColumns: string[] = ['select', 'position', 'serviceInternalId', 'quoteId', 'serviceHours'];
  dataSource = new MatTableDataSource<RootObject>(data.map((value, index) => ({ ...value, position: index })));
  selection = new SelectionModel<RootObject>(true, []);
  _selectedItems: any;
  @Output() selectedRows = new EventEmitter();



  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.setSelectedItems();
      this.startSelectionRowIndex = this.endSelectionRowIndex = -1;
      return;
    }

    this.selection.select(...this.dataSource.data);
    this.setSelectedItems();
  }

  setSelectedItems(items = this.selection.selected) {
    this._selectedItems = items;
    this.selectedRows.emit(this._selectedItems);
  }


  getSelector(rows: RootObjectWithPosition[]) {
    const length = rows.length;
    let selector = [-1, -1];
    if (length === 0) {
      selector = [-1, -1];
    } else if (length === 1) {
      const [startRow] = rows;
      const position = startRow.position;
      selector = [position, position];
    } else {
      const sortedByIndex = rows.sort((a, b) => a.position - b.position);
      const startRow = sortedByIndex[0], endRow = sortedByIndex[sortedByIndex.length - 1];
      selector = [startRow.position, endRow.position];
    }
    return selector;
  }

  selectRows(rows: RootObjectWithPosition[]) {
    const [startRowIndex, endRowIndex] = this.getSelector(rows);
    this.selection.clear();
    setTimeout(() => {
      const slicedData = this.dataSource.data.slice(startRowIndex, endRowIndex + 1);
      this.selection.select(...slicedData);
      this.setSelectedItems();
    }, 50)
  }


  selectRow(row: RootObjectWithPosition) {
    this.selection.select(row);
  }

  ngOnInit() {
    // this.selectRows([])
    this.selectRows([{ ...data[10], position: 10 },  { ...data[3], position: 3 }, { ...data[4], position: 4 },  { ...data[2], position: 2 }]);
    // this.selectRows([{ ...data[10], position: 10 }]);
  }

}
