import { appList } from "src/utils/constants";
import page from "../page";

export class ChallengingDomPage extends page {
    pageURL = 'challenging_dom'
    appName = appList.herokuapp.name

    private get CurrentTable() {
        return true;
    }

    override async open() {
        super.open(this.pageURL, this.appName);
    }
}

export default new ChallengingDomPage();