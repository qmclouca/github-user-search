export type PersonResponse = {
    content: Person[];
}

export type Person = {
    name: string;
    avatar_url?: string;
    company?: string;
    blog?: string;
    location?: string;
    public_repos?: number;
    followers?: number;
    following?: number;
    created_at?: string;
}