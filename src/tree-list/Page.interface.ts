export interface Page {
    id: string;
    title: string;
    url: string;
    pages?: Page[];
}
