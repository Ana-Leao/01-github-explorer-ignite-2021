import RepositoryItem from './RepositoryItem';
import '../styles/repositories.scss';

const repository = {
   name: 'unform',
   description: 'Forms in React',
   link: 'https://github.com/Ana-Leao',
};

function RepositoryList() {
   return (
      <section className='repository-list'>
         <h1>Lista de Repositórios</h1>
         <ul>
            <RepositoryItem repository={repository} />
            <RepositoryItem repository={repository} />
            <RepositoryItem repository={repository} />
            <RepositoryItem repository={repository} />
         </ul>
      </section>
   );
}

export default RepositoryList;
