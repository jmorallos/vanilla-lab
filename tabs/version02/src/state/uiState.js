const uiState = {
    activeId: null
}

export function initUiState(tabs) {
    if(!uiState.activeId && tabs.length > 0) {
        uiState.activeId = tabs[0].id;
    }
}

export function getActiveTAb() {
    return uiState.activeId;
}