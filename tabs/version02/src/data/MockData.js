export const APP_DATA = {
    title: "Tab Version 02",
    subtitle: "Organized DOM Architecture",
    tabs: [
        {
            id: "tab-1",
            label: "Overview",
            panel: {
                heading: "Overview",
                body: "This tab explains the core idea.",
                bullets: ["State", "Render", "Events"]
            }
        },
        {
            id: "tab-2",
            label: "Details",
            panel: {
                heading: "Details",
                body: "This tab contains deeper notes.",
                bullets: ["Event delegation", "Separation of concerns"]
            }
        },
        {
            id: "tab-3",
            label: "Notes",
            panel: {
                heading: "Notes",
                body: "This tab has extra notes.",
                bullets: ["Scalable structure", "Reusable UI"]
            }
        }
    ],
    footer: {
        text: "Built with vanilla JS"
    }
};