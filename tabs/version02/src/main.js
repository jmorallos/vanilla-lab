import { APP_DATA } from "./data/MockData.js";
import { getActiveTAb, initUiState } from "./state/uiState.js";
import { renderTabs } from "./dom/renderTabs.js";

initUiState(APP_DATA.tabs);

const root = document.getElementById('root');
const app = document.createElement('div');
app.id = "app";

const tabsUi = renderTabs(APP_DATA, getActiveTAb());


app.append(tabsUi);
root.append(app);