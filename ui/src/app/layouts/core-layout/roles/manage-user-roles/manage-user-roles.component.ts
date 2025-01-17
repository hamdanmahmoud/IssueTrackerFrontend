import { Component, EventEmitter, Inject, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ProjectService } from "app/shared/services/project.service";
import { RoleService } from "app/shared/services/role.service";
import { Role } from "../../../../models/Role";
import { TrackerProject } from "../../../../models/TrackerProject";
import { User } from "../../../../models/User";
import { allProjects } from "../../../../shared/services/appData";

@Component({
  selector: "app-manage-user-roles",
  templateUrl: "./manage-user-roles.component.html",
  styleUrls: ["./manage-user-roles.component.scss"],
})
export class ManageUserRolesComponent implements OnInit {
  user: User;
  project: TrackerProject;
  projectId: string;
  selectedRolesList: FormControl;
  allOptions: Role[];
  @Output() save = new EventEmitter<boolean>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private roleService: RoleService,
    private projectService: ProjectService
  ) {}

  async ngOnInit(): Promise<void> {
    this.user = this.data.user;
    console.log(this.user, this.user.getName());
    this.projectId = this.data.projectId;
    this.project = allProjects.find(
      (project) => project.getId() === this.projectId
    );
    this.selectedRolesList = new FormControl(
      await this.projectService.getRolesOfUserDefinedOnProject(
        this.projectId,
        this.user.getId()
      )
    );
    this.allOptions = await this.roleService.getRolesOfProjectById(
      this.projectId
    );
  }

  compareRoles(availableOption: Role, selectedOption: Role) {
    return availableOption.getId() === selectedOption.getId();
  }

  saveModifications() {
    let selectedRoles = this.selectedRolesList.value;

    console.log(this.selectedRolesList);
    this.user.setRolesOnProject(this.projectId, selectedRoles);

    this.projectService.updateUserRolesByProjectId(
      this.projectId,
      this.user.getId(),
      selectedRoles
    );

    this.save.emit(true);
  }
}
