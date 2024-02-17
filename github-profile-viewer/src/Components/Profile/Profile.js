import './Profile.css'
import { Octokit } from "octokit";
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
export default function Profile({setRedirectPath,username}) {
    const [profile, setProfile] = useState()
    setRedirectPath(null)

    useEffect(() => {
        fetchProfile()
    }, [])

    const fetchProfile = async () => {
        const octokit = new Octokit({
            auth: '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'
        })

        const response = await octokit.request('GET /users/{username}', {
            username: username,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
        console.log(response);
        setProfile(response.data)
    }
    return (

        <>
            {profile && (
                <div className='profile'>
                    <div className='test'>
                        <img alt="User Avatar" src={profile.avatar_url} class="avatar"></img>
                        <span className="profileName">{profile.name}</span>
                        <span className="login">{profile.login}</span>
                        <span className="profileName bio">{profile.bio}</span>
                        <span className="repos ">Number of Repositories: {profile.public_repos}</span>
                    </div>

                </div>

            )}
        </>






    )
}