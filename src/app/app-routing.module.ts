import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultLayoutComponent } from "./components/default-layout/default-layout.component";
import { AdminComponent } from "./pages/admin/admin.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultLayoutComponent,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("./pages/home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "history",
        loadChildren: () =>
          import("./pages/about/history/history.module").then(
            (m) => m.HistoryModule
          ),
      },
      {
        path: "vision",
        loadChildren: () =>
          import("./pages/about/vision/vision.module").then(
            (m) => m.VisionModule
          ),
      },
      {
        path: "personal",
        loadChildren: () =>
          import("./pages/about/personal/personal.module").then(
            (m) => m.PersonalModule
          ),
      },
      {
        path: "laboratory",
        loadChildren: () =>
          import("./pages/laboratory/laboratory.module").then(
            (m) => m.LaboratoryModule
          ),
      },
      {
        path: "activity",
        loadChildren: () =>
          import("./pages/news/activity/activity.module").then(
            (m) => m.ActivityModule
          ),
      },
      {
        path: "publish",
        loadChildren: () =>
          import("./pages/news/publish/publish.module").then(
            (m) => m.PublishModule
          ),
      },
      {
        path: "recruitment",
        loadChildren: () =>
          import("./pages/news/recruitment/recruitment.module").then(
            (m) => m.RecruitmentModule
          ),
      },
      {
        path: "contact",
        loadChildren: () =>
          import("./pages/contact/contact.module").then((m) => m.ContactModule),
      },
      {
        path: "admin",
        loadChildren: () =>
          import("./pages/admin/admin.module").then((m) => m.AdminModule),
      },
      // {
      //   path: "admin",
      //   pathMatch: "prefix",
      //   children: [
      //     {
      //       path: "all",
      //       data: { isProduct: false },
      //       loadChildren: () =>
      //         import("./pages/admin/admin.module").then((m) => m.AdminModule),
      //     },

      //     {
      //       path: ":data",
      //       data: { isProduct: true },
      //       loadChildren: () =>
      //         import("./pages/admin/admin.module").then((m) => m.AdminModule),
      //     },
      //     {
      //       path: "",
      //       redirectTo: "/admin/all",
      //       pathMatch: "full",
      //     },
      //   ],
      // },

      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
