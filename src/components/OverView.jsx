// Import necessary components from the Syncfusion library
import { useRef } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Filter,
  VirtualScroll,
  Sort,
} from "@syncfusion/ej2-react-grids";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { DataManager, Query, UrlAdaptor } from "@syncfusion/ej2-data";
import { closest, isNullOrUndefined } from "@syncfusion/ej2-base";
import StatusComponent from "./Status";
import CustomRatingComponent from "./Rating";
import ProgressComponent from "./Progress";
import TrustComponent from "./Trust";
import EmpTemplateComponent from "./EmpTemplate";
import ColTemplateComponent from "./ColTemplate";
import "../App.css";

// Functional component for displaying an overview grid
const OverView = () => {
  // Refs for accessing and interacting with specific components
  const ddObj = useRef(null); // Drop-down component
  const gridInstance = useRef(null); // Grid component
  const searchBox = useRef(null); // Textbox component for search

  // Reference for clearing interval during data binding
  const clrIntervalFun2 = useRef(null);

  // Data for drop-down list
  const ddlData = [
    { text: "1,000 Rows and 11 Columns", value: "1000" },
    { text: "10,000 Rows and 11 Columns", value: "10000" },
    { text: "1,00,000 Rows and 11 Columns", value: "100000" },
  ];

  // Fields configuration for drop-down
  const fields = { text: "text", value: "value" };

  // Callback function when data is bound to the grid
  const onDataBound = () => {
    clearTimeout(clrIntervalFun2.current);
  };

  // Callback function when an action is completed
  const onComplete = (args) => {
    if (args.requestType === "filterchoicerequest") {
      const { field } = args.filterModel.options;
      if (
        field === "Trustworthiness" ||
        field === "Rating" ||
        field === "Status"
      ) {
        const span =
          args.filterModel.dialogObj.element.querySelectorAll(
            ".e-selectall"
          )[0];
        if (!isNullOrUndefined(span)) {
          closest(span, ".e-ftrchk").classList.add("e-hide");
        }
      }
    }
  };

  // Base URL for data retrieval
  const hostUrl = "https://services.syncfusion.com/react/production/";

  // Data manager with URL adapter for remote data binding
  const data = new DataManager({
    url: hostUrl + "api/UrlDataSource",
    adaptor: new UrlAdaptor(),
  });

  // Query to retrieve data with a specified data count
  const query = new Query().addParams("dataCount", "1000");

  // Callback function when the drop-down selection changes
  const onChange = () => {
    ddObj.current.hidePopup();

    clearTimeout(clrIntervalFun2.current);
    clrIntervalFun2.current = setTimeout(() => {
      let contentElement =
        gridInstance.current.contentModule.getPanel().firstChild;
      contentElement.scrollLeft = 0;
      contentElement.scrollTop = 0;
      gridInstance.current.pageSettings.currentPage = 1;

      if (gridInstance.current.query.params.length > 1) {
        for (let i = 0; i < gridInstance.current.query.params.length; i++) {
          if (gridInstance.current.query.params[i].key === "dataCount") {
            gridInstance.current.query.params[i].value =
              ddObj.current.value.toString();
            break;
          }
        }
      } else {
        gridInstance.current.query.params[0].value =
          ddObj.current.value.toString();
      }

      gridInstance.current.setProperties({ dataSource: data });
    }, 100);
  };

  // Configuration for checkbox in the grid
  const check = { type: "CheckBox" };

  // Configuration for grid selection
  const select = {
    persistSelection: true,
    type: "Multiple",
    checkboxOnly: true,
  };

  // Configuration for grid filtering
  const gridFilter = { type: "Menu" };

  // Configuration for status column in the grid
  const status = {
    type: "CheckBox",
    itemTemplate: StatusComponent,
  };

  // Configuration for trust column in the grid
  const trust = {
    type: "CheckBox",
    itemTemplate: TrustComponent,
  };

  // Configuration for rating column in the grid
  const rating = {
    type: "CheckBox",
    itemTemplate: CustomRatingComponent,
  };

  // Callback function for search
  const oneSearch = (args) => {
    const searchString = args.value;
    gridInstance.current.search(searchString);
  };

  // JSX structure for the component
  return (
    <div className="control-pane">
      <div className="control-section">
        <div style={{ paddingBottom: "18px" }}>
          {/* Textbox for search */}
          <TextBoxComponent
            ref={searchBox}
            placeholder="Name or Role Search"
            input={oneSearch}
            showClearButton={true}
            cssClass="search-input"
          />
          {/* Drop-down for selecting data range */}
          <DropDownListComponent
            id="games"
            width="220"
            dataSource={ddlData}
            index={0}
            ref={ddObj}
            fields={fields}
            change={onChange}
            placeholder="Select a Data Range"
            popupHeight="240px"
          />
          <br />
        </div>
        {/* Grid component */}
        <GridComponent
          id="overviewgrid"
          dataSource={data}
          query={query}
          enableHover={false}
          enableVirtualization={true}
          rowHeight={38}
          height="400"
          ref={gridInstance}
          actionComplete={onComplete}
          dataBound={onDataBound}
          filterSettings={gridFilter}
          allowFiltering={true}
          allowSorting={true}
          allowSelection={true}
          selectionSettings={select}
          enableHeaderFocus={true}
        >
          {/* Columns configuration */}
          <ColumnsDirective>
            {/* Checkbox column */}
            <ColumnDirective
              type="checkbox"
              allowSorting={false}
              allowFiltering={false}
              width="60"
              filter={check}
            ></ColumnDirective>
            {/* Employee ID column */}
            <ColumnDirective
              field="EmployeeID"
              visible={false}
              headerText="Employee ID"
              isPrimaryKey={true}
              width="130"
            ></ColumnDirective>
            {/* Employee Name column */}
            <ColumnDirective
              field="Employees"
              headerText="Employee Name"
              width="230"
              clipMode="EllipsisWithTooltip"
              template={EmpTemplateComponent}
            ></ColumnDirective>
            {/* Role column */}
            <ColumnDirective
              field="Designation"
              headerText="Role"
              width="170"
              clipMode="EllipsisWithTooltip"
            ></ColumnDirective>
            {/* Mail column */}
            <ColumnDirective
              field="Mail"
              headerText="Mail"
              width="230"
            ></ColumnDirective>
            {/* Location column */}
            <ColumnDirective
              field="Location"
              headerText="Location"
              width="140"
              template={ColTemplateComponent}
            ></ColumnDirective>
            {/* Status column */}
            <ColumnDirective
              field="Status"
              headerText="Status"
              template={StatusComponent}
              width="130"
              filter={status}
            ></ColumnDirective>
            {/* Trustworthiness column */}
            <ColumnDirective
              field="Trustworthiness"
              headerText="Trustworthiness"
              template={TrustComponent}
              width="160"
              filter={trust}
            ></ColumnDirective>
            {/* Rating column */}
            <ColumnDirective
              field="Rating"
              headerText="Rating"
              template={CustomRatingComponent}
              width="220"
              filter={rating}
            ></ColumnDirective>
            {/* Software Proficiency column */}
            <ColumnDirective
              field="Software"
              allowFiltering={false}
              allowSorting={false}
              headerText="Software Proficiency"
              width="180"
              template={ProgressComponent}
              format="C2"
            ></ColumnDirective>
            {/* Current Salary column */}
            <ColumnDirective
              field="CurrentSalary"
              headerText="Current Salary"
              width="160"
              format="C2"
            ></ColumnDirective>
            {/* Address column */}
            <ColumnDirective
              field="Address"
              headerText="Address"
              width="240"
              clipMode="EllipsisWithTooltip"
            ></ColumnDirective>
          </ColumnsDirective>
          {/* Injected services for grid functionality */}
          <Inject services={[Filter, VirtualScroll, Sort]} />
        </GridComponent>
      </div>
    </div>
  );
};

// Export the component for use in other parts of the application
export default OverView;
