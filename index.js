const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The message: "${github.context.payload.head_commit.message}"`);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}


const b = {
  "after": "71923bfa66fdb23124894cebfc75e1643554763e",
  "base_ref": null,
  "before": "5f2672322955772e49d9cfeb40f752ed25dd1221",
  "commits": [
    {
      "author": {
        "email": "miltonejones@gmail.com",
        "name": "miltonejones",
        "username": "miltonejones"
      },
      "committer": {
        "email": "miltonejones@gmail.com",
        "name": "miltonejones",
        "username": "miltonejones"
      },
      "distinct": false,
      "id": "a574aad149c3d22709b83b992bb5d174328d87be",
      "message": "adding custom action",
      "timestamp": "2022-08-16T04:26:53-05:00",
      "tree_id": "6ad6a1ce433fcad8d14c613f101f3a658e4fc4bd",
      "url": "https://github.com/miltonejones/react-sploosh-amplify/commit/a574aad149c3d22709b83b992bb5d174328d87be"
    },
    {
      "author": {
        "email": "miltonejones@gmail.com",
        "name": "miltonejones",
        "username": "miltonejones"
      },
      "committer": {
        "email": "noreply@github.com",
        "name": "GitHub",
        "username": "web-flow"
      },
      "distinct": true,
      "id": "71923bfa66fdb23124894cebfc75e1643554763e",
      "message": "Merge pull request #58 from miltonejones/002-search-modes\n\nadding custom action",
      "timestamp": "2022-08-16T04:28:02-05:00",
      "tree_id": "6ad6a1ce433fcad8d14c613f101f3a658e4fc4bd",
      "url": "https://github.com/miltonejones/react-sploosh-amplify/commit/71923bfa66fdb23124894cebfc75e1643554763e"
    }
  ],
  "compare": "https://github.com/miltonejones/react-sploosh-amplify/compare/5f2672322955...71923bfa66fd",
  "created": false,
  "deleted": false,
  "forced": false,
  "head_commit": {
    "author": {
      "email": "miltonejones@gmail.com",
      "name": "miltonejones",
      "username": "miltonejones"
    },
    "committer": {
      "email": "noreply@github.com",
      "name": "GitHub",
      "username": "web-flow"
    },
    "distinct": true,
    "id": "71923bfa66fdb23124894cebfc75e1643554763e",
    "message": "Merge pull request #58 from miltonejones/002-search-modes\n\nadding custom action",
    "timestamp": "2022-08-16T04:28:02-05:00",
    "tree_id": "6ad6a1ce433fcad8d14c613f101f3a658e4fc4bd",
    "url": "https://github.com/miltonejones/react-sploosh-amplify/commit/71923bfa66fdb23124894cebfc75e1643554763e"
  },
  "pusher": {
    "email": "miltonejones@gmail.com",
    "name": "miltonejones"
  },
  "ref": "refs/heads/master",
  "repository": {
    "allow_forking": true,
    "archive_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/{archive_format}{/ref}",
    "archived": false,
    "assignees_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/assignees{/user}",
    "blobs_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/git/blobs{/sha}",
    "branches_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/branches{/branch}",
    "clone_url": "https://github.com/miltonejones/react-sploosh-amplify.git",
    "collaborators_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/collaborators{/collaborator}",
    "comments_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/comments{/number}",
    "commits_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/commits{/sha}",
    "compare_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/compare/{base}...{head}",
    "contents_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/contents/{+path}",
    "contributors_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/contributors",
    "created_at": 1646277663,
    "default_branch": "master",
    "deployments_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/deployments",
    "description": "Created with StackBlitz ⚡️",
    "disabled": false,
    "downloads_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/downloads",
    "events_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/events",
    "fork": false,
    "forks": 0,
    "forks_count": 0,
    "forks_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/forks",
    "full_name": "miltonejones/react-sploosh-amplify",
    "git_commits_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/git/commits{/sha}",
    "git_refs_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/git/refs{/sha}",
    "git_tags_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/git/tags{/sha}",
    "git_url": "git://github.com/miltonejones/react-sploosh-amplify.git",
    "has_downloads": true,
    "has_issues": true,
    "has_pages": false,
    "has_projects": true,
    "has_wiki": true,
    "homepage": "https://stackblitz.com/edit/react-kanncx",
    "hooks_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/hooks",
    "html_url": "https://github.com/miltonejones/react-sploosh-amplify",
    "id": 465552636,
    "is_template": false,
    "issue_comment_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/issues/comments{/number}",
    "issue_events_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/issues/events{/number}",
    "issues_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/issues{/number}",
    "keys_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/keys{/key_id}",
    "labels_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/labels{/name}",
    "language": "JavaScript",
    "languages_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/languages",
    "license": null,
    "master_branch": "master",
    "merges_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/merges",
    "milestones_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/milestones{/number}",
    "mirror_url": null,
    "name": "react-sploosh-amplify",
    "node_id": "R_kgDOG7_E_A",
    "notifications_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/notifications{?since,all,participating}",
    "open_issues": 0,
    "open_issues_count": 0,
    "owner": {
      "avatar_url": "https://avatars.githubusercontent.com/u/28455725?v=4",
      "email": "miltonejones@gmail.com",
      "events_url": "https://api.github.com/users/miltonejones/events{/privacy}",
      "followers_url": "https://api.github.com/users/miltonejones/followers",
      "following_url": "https://api.github.com/users/miltonejones/following{/other_user}",
      "gists_url": "https://api.github.com/users/miltonejones/gists{/gist_id}",
      "gravatar_id": "",
      "html_url": "https://github.com/miltonejones",
      "id": 28455725,
      "login": "miltonejones",
      "name": "miltonejones",
      "node_id": "MDQ6VXNlcjI4NDU1NzI1",
      "organizations_url": "https://api.github.com/users/miltonejones/orgs",
      "received_events_url": "https://api.github.com/users/miltonejones/received_events",
      "repos_url": "https://api.github.com/users/miltonejones/repos",
      "site_admin": false,
      "starred_url": "https://api.github.com/users/miltonejones/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/miltonejones/subscriptions",
      "type": "User",
      "url": "https://api.github.com/users/miltonejones"
    },
    "private": true,
    "pulls_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/pulls{/number}",
    "pushed_at": 1660642083,
    "releases_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/releases{/id}",
    "size": 77997,
    "ssh_url": "git@github.com:miltonejones/react-sploosh-amplify.git",
    "stargazers": 0,
    "stargazers_count": 0,
    "stargazers_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/stargazers",
    "statuses_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/statuses/{sha}",
    "subscribers_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/subscribers",
    "subscription_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/subscription",
    "svn_url": "https://github.com/miltonejones/react-sploosh-amplify",
    "tags_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/tags",
    "teams_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/teams",
    "topics": [],
    "trees_url": "https://api.github.com/repos/miltonejones/react-sploosh-amplify/git/trees{/sha}",
    "updated_at": "2022-08-16T09:11:18Z",
    "url": "https://github.com/miltonejones/react-sploosh-amplify",
    "visibility": "private",
    "watchers": 0,
    "watchers_count": 0,
    "web_commit_signoff_required": false
  },
  "sender": {
    "avatar_url": "https://avatars.githubusercontent.com/u/28455725?v=4",
    "events_url": "https://api.github.com/users/miltonejones/events{/privacy}",
    "followers_url": "https://api.github.com/users/miltonejones/followers",
    "following_url": "https://api.github.com/users/miltonejones/following{/other_user}",
    "gists_url": "https://api.github.com/users/miltonejones/gists{/gist_id}",
    "gravatar_id": "",
    "html_url": "https://github.com/miltonejones",
    "id": 28455725,
    "login": "miltonejones",
    "node_id": "MDQ6VXNlcjI4NDU1NzI1",
    "organizations_url": "https://api.github.com/users/miltonejones/orgs",
    "received_events_url": "https://api.github.com/users/miltonejones/received_events",
    "repos_url": "https://api.github.com/users/miltonejones/repos",
    "site_admin": false,
    "starred_url": "https://api.github.com/users/miltonejones/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/miltonejones/subscriptions",
    "type": "User",
    "url": "https://api.github.com/users/miltonejones"
  }
}