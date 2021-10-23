
import { LoginPage } from "./pages/Amazon/login.page";
import { MainPage } from "./pages/Amazon/main.page";
import { PageNavigation } from "./pages/Amazon/navigation.po";
import { SideBar } from "./pages/Amazon/sidebar.po";
import { PageToolbar } from "./pages/Amazon/toolbar.po";
import { ChallengingDomPage } from "./pages/herokuapp/challengingDom.page";

import { PracticeFormPage } from "./pages/toolsQA/PracticeForm.page";

export class AppPage {
    // Amazon
    loginPage: LoginPage;
    mainPage: MainPage;

    // toolsQA
    practiceFormPage: PracticeFormPage;

    // herokuapp
    challengingDomPage: ChallengingDomPage;

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
        this.practiceFormPage = new PracticeFormPage();
        this.challengingDomPage = new ChallengingDomPage();
    }
}
