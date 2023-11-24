type Language = "es" | "en";
type AsideTitles = {
    [language in Language]: {
        details: string;
        links: string;
        languages: string;
        downloadCV: string;
    };
};
type MainTitles = {
    [language in Language]: {
        aboutMe: string;
        experience: string;
        education: string;
    };
}
export type {
    Language, AsideTitles, MainTitles
}