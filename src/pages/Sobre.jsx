import Card from '../components/Card';

function Sobre() {
  return (
    <Card titulo="Sobre o projeto">
      <p className="text-gray-600 dark:text-gray-300">
        Esta é a entrega parcial do projeto final. A estrutura de pastas,
        as rotas, a integração com a API e o tema claro/escuro já estão
        funcionando. As próximas etapas são a busca, a página de detalhes
        e o deploy.
      </p>
    </Card>
  );
}

export default Sobre;