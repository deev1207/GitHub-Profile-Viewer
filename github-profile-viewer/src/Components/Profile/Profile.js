import './Profile.css'
import { Octokit } from "octokit";
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
export default function Profile({setRedirectPath,username}) {
    const [profile, setProfile] = useState()
    setRedirectPath(null)

    useEffect(() => {
        fetchProfile()
        console.log( '12');
    }, [])

    const fetchProfile = async () => {
        console.log( process.env.REACT_APP_AUTH_TOKEN);
        const octokit = new Octokit({
            auth: process.env.REACT_APP_AUTH_TOKEN
        })

        const response = await octokit.request('GET /users/{username}', {
            username: username,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
        console.log(response);
        console.log('test 1');
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