export function renderTabs(appData, activeTabId) {
    const container = document.createElement('div');
    container.id = "container";

    const title = document.createElement('h1');
    title.id = "tab-title";
    title.textContent = appData.title;

    const subtitle = document.createElement('p');
    subtitle.id = "tab-subtitle";
    subtitle.textContent = appData.subtitle;

    const tabList = document.createElement('div');
    tabList.id = "tablist";
    tabList.setAttribute("role", "tablist");
    tabList.setAttribute("aria-labelledby", "tab-title");


    appData.tabs.forEach((tab) => {
        const button = document.createElement('button');
        button.type = "button";
        button.id = tab.id;
        button.setAttribute("role", "tab");
        button.setAttribute("data-tab-id", tab.id);

        const isActive = tab.id === activeTabId;
        button.setAttribute("aria-selected", String(isActive));
        button.tabIndex = isActive ? 0 : -1;
        button.textContent = tab.label;

        tabList.append(button);
    });

    container.append(title, subtitle, tabList);
    return container;
}

