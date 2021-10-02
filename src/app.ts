import { PageNavigation } from "./pages/navigation.po";
import { LoginPage } from "./pages/login.page";
import { SideBar } from "./pages/sidebar.po";
import { MainPage } from "./pages/main.page";
import { PageToolbar } from "./pages/toolbar.po";

export class AppPage {
    loginPage: LoginPage;
    mainPage: MainPage;

    get sideBar(): SideBar {
        return new SideBar('.sg-col-4-of-12.s-matching-dir.sg-col-4-of-16.sg-col.sg-col-4-of-20');
    }

    get pageNavigation(): PageNavigation {
        return new PageNavigation('navbar-main');
    }

    get pageToolbar(): PageToolbar {
        return new PageToolbar('h1,.a-size-base.s-desktop-toolbar.a-text-normal');
    }

    constructor() {
        this.loginPage = new LoginPage();
        this.mainPage = new MainPage();
    }
}
