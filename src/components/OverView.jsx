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

const OverView = () => {
  const ddObj = useRef(null);
  const gridInstance = useRef(null);
  const searchBox = useRef(null);
  const clrIntervalFun2 = useRef(null);

  const ddlData = [
    { text: "1,000 Rows and 11 Columns", value: "1000" },
    { text: "10,000 Rows and 11 Columns", value: "10000" },
    { text: "1,00,000 Rows and 11 Columns", value: "100000" },
  ];

  const fields = { text: "text", value: "value" };

  const onDataBound = () => {
    clearTimeout(clrIntervalFun2.current);
  };

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

  const hostUrl = "https://services.syncfusion.com/react/production/";
  const data = new DataManager({
    url: hostUrl + "api/UrlDataSource",
    adaptor: new UrlAdaptor(),
  });
  const query = new Query().addParams("dataCount", "1000");

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

  const check = { type: "CheckBox" };

  const select = {
    persistSelection: true,
    type: "Multiple",
    checkboxOnly: true,
  };

  const gridFilter = { type: "Menu" };

  const status = {
    type: "CheckBox",
    itemTemplate: StatusComponent,
  };

  const trust = {
    type: "CheckBox",
    itemTemplate: TrustComponent,
  };

  const rating = {
    type: "CheckBox",
    itemTemplate: CustomRatingComponent,
  };

  const oneSearch = (args) => {
    const searchString = args.value;
    gridInstance.current.search(searchString);
  };

  return (
    <div className="control-pane">
      <div className="control-section">
        <div style={{ paddingBottom: "18px" }}>
          <TextBoxComponent
            ref={searchBox}
            placeholder="Name or Role Search"
            input={oneSearch}
            showClearButton={true}
            cssClass="search-input"
          />
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
          <ColumnsDirective>
            <ColumnDirective
              type="checkbox"
              allowSorting={false}
              allowFiltering={false}
              width="60"
              filter={check}
            ></ColumnDirective>
            <ColumnDirective
              field="EmployeeID"
              visible={false}
              headerText="Employee ID"
              isPrimaryKey={true}
              width="130"
            ></ColumnDirective>
            <ColumnDirective
              field="Employees"
              headerText="Employee Name"
              width="230"
              clipMode="EllipsisWithTooltip"
              template={EmpTemplateComponent}
            ></ColumnDirective>
            <ColumnDirective
              field="Designation"
              headerText="Role"
              width="170"
              clipMode="EllipsisWithTooltip"
            ></ColumnDirective>
            <ColumnDirective
              field="Mail"
              headerText="Mail"
              width="230"
            ></ColumnDirective>
            <ColumnDirective
              field="Location"
              headerText="Location"
              width="140"
              template={ColTemplateComponent}
            ></ColumnDirective>
            <ColumnDirective
              field="Status"
              headerText="Status"
              template={StatusComponent}
              width="130"
              filter={status}
            ></ColumnDirective>
            <ColumnDirective
              field="Trustworthiness"
              headerText="Trustworthiness"
              template={TrustComponent}
              width="160"
              filter={trust}
            ></ColumnDirective>
            <ColumnDirective
              field="Rating"
              headerText="Rating"
              template={CustomRatingComponent}
              width="220"
              filter={rating}
            ></ColumnDirective>
            <ColumnDirective
              field="Software"
              allowFiltering={false}
              allowSorting={false}
              headerText="Software Proficiency"
              width="180"
              template={ProgressComponent}
              format="C2"
            ></ColumnDirective>
            <ColumnDirective
              field="CurrentSalary"
              headerText="Current Salary"
              width="160"
              format="C2"
            ></ColumnDirective>
            <ColumnDirective
              field="Address"
              headerText="Address"
              width="240"
              clipMode="EllipsisWithTooltip"
            ></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Filter, VirtualScroll, Sort]} />
        </GridComponent>
      </div>
    </div>
  );
};

export default OverView;
