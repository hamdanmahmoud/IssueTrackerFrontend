import { SelectionModel } from "@angular/cdk/collections";
import { Component, Input, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Issue } from "../../../../models/Issue";
import { API } from "../../../../API.conf";
import { ProjectService } from "app/shared/services/project.service";
import { UserService } from "app/shared/services/user.service";
import { IssueService } from "app/shared/services/issue.service";

@Component({
  selector: "app-issues-table",
  templateUrl: "./issues-table.component.html",
  styleUrls: [
    "./issues-table.component.scss",
    "../../../../../assets/scss/responsive-table-styles.scss",
    "../../../../../assets/css/argon.scss",
  ],
})
export class IssuesTableComponent implements OnInit {
  @Input()
  data: Issue[];

  @Input()
  displayedColumns: string[];

  @Input()
  statusList?: string[];

  dataSource: MatTableDataSource<Issue>;
  selection = new SelectionModel<Issue>(true, []);

  constructor(
    private projectService: ProjectService,
    private userService: UserService,
    private issueService: IssueService
  ) {
    console.log(API.userURL);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Issue>(this.data);
    console.log(this.data);
  }

  changeStatusOfIssue(value, issue) {
    issue.setStatus(value);
    this.issueService.updateIssue(issue);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Issue): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${
      this.dataSource.data.findIndex(
        (element) => element.getId() === row.getId()
      ) + 1
    }`;
  }

  removeIssue(issue: Issue) {
    console.log("Remove issue ", issue);
    this.issueService.deleteIssue(issue.getId());
    this.dataSource.data = this.dataSource.data.filter(
      (issueInTable) => !(issueInTable.getId() === issue.getId())
    );
  }
}
