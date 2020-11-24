export type PersonResponse = {
    content: Person[];
}

export type Person = {
    name: string;
    avatar_url: string;
    company: string;
    blog: string;
    location: string;
    public_repos: string;
    followers: string;
    following: string;
    created_at: string;
}