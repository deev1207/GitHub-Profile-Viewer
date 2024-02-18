import './Repos.css'
import { Octokit } from "octokit";
import { useEffect,useState,useRef } from 'react';
import Card from '../Card/Card';

export default function Repos({username}){
    const [repos, setRepos] = useState([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState('start')
    const [count, setCount] = useState(0)
    const currentRepoCount = useRef(0)
    const repoCount = useRef(0)
    const visitedPages = useRef([])
    const perPage = 10; // Number of items per page
    console.log(process.env.REACT_APP_AUTH_TOKEN);
    let res = null
    console.log(visitedPages, 'visited');
    console.log('repos');
    useEffect(()=>{
      getRepoLength()
      console.log('1');
    }, [])
    useEffect(() => {
    window.scrollTo(0, 0);
      fetchRepos();
      console.log('2');
    }, [page]); 
  
  
      const getRepoLength =async()=>{
        const octokit = new Octokit({ auth: process.env.REACT_APP_AUTH_TOKEN });
        const response = await octokit.request("GET /users/{username}/repos", {
          username: username,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        });
        console.log(response.data.length);
        repoCount.current = response.data.length
        console.log( repoCount.current);
  
      }
      const fetchRepos = async()=>{
        const octokit = new Octokit({ auth: process.env.REACT_APP_AUTH_TOKEN });
        const response = await octokit.request("GET /users/{username}/repos", {
          username: username,
          per_page: perPage,
          page: page,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        });
        res = response
        console.log(response);
        if(page==1 && currentRepoCount.current!=0 && pagination==='start'){return}
 
        if(!visitedPages.current.includes(page)){
            currentRepoCount.current+=response.data.length
        }

  
        console.log(response.data);
 
        setCount(response.data.length)
        setRepos(response.data)
      }
  

      
      const prvs = (pageNumber)=>{
        if(visitedPages.current.includes(page)){
            console.log('prvs');
            currentRepoCount.current-=count
        }
        else{
            visitedPages.current = [...visitedPages.current, page]
        }
        setPage(pageNumber);
        setPagination('prvs')
        
      }

      const next = (pageNumber)=>{
        if(visitedPages.current.includes(page)){
            console.log('next');
            currentRepoCount.current+=count
        }
        else{
            visitedPages.current = [...visitedPages.current, page]
        }
        setPage(pageNumber);
        setPagination('next')
      }
      console.log(currentRepoCount.current , repoCount.current);
      const isLastPage = currentRepoCount.current == repoCount.current;
    return (
      <div className="repo-container">
     
        {repos.map(repo => (
         <Card key={repo.id} repo={repo}/>
        ))}
     
      <div>
        <button onClick={() => prvs(page - 1)} disabled={page === 1}>Previous</button>
        <button onClick={() => next(page + 1)} disabled={isLastPage}>Next</button>
      </div>
    </div>
    );
}