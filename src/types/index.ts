type Language = "es" | "en";
type Titles = {
    [language in Language]: {
        details: string;
        links: string;
        languages: string;
        downloadCV: string;
    };
};
export type {
    Language, Titles
}