import RepositoryItem from './RepositoryItem';
import '../styles/repositories.scss';
import { useEffect, useState } from 'react';

interface Repository {
   name: string;
   description: string;
   html_url: string;
}

function RepositoryList() {
   const [repositories, setRepositories] = useState<Repository[]>([]);

   useEffect(() => {
      fetch('https://api.github.com/users/Ana-Leao/repos')
         .then((response) => response.json())
         .then((data) => setRepositories(data));
   }, []);

   return (
      <section className='repository-list'>
         <h1>Lista de Repositórios</h1>
         <ul>
            {repositories.map((repository) => {
               return (
                  <RepositoryItem
                     key={repository.name}
                     repository={repository}
                  />
               );
            })}

            {/* {repositories.map((repository) => (<RepositoryItem {repository.name} repository={repository}/>))} */}
         </ul>
      </section>
   );
}

export default RepositoryList;
