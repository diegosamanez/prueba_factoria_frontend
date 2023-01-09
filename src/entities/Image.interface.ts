export default interface Image {
    id: number;
    name: string;
    image?: File | null;
    path: string;
}