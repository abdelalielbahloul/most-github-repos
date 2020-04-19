import { Owner } from './owner';
import { License } from './license';

export class GithubRepos {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: Owner;
    html_url: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    pushed_at: Date;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    forks: number;
    open_issues: number;
    open_issues_count: number;
    watchers: number;
    default_branch: string;
    license: License;
    color: string;
    
}
