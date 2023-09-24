export interface IHelpers {
  statusCodeMessage: (status: keyof typeof statusMessages) => string;
}

const statusMessages = {
  page403:
    'Desculpe, parece que você não possui permissão para acessar essa página ou serviço. Caso precise de assistência, entre em contato conosco.',
  page404:
    'A página que procura não existe ou não está disponível no momento. Verifique a URL e tente novamente. Caso precise de assistência, entre em contato conosco.',
  200: 'OK - Requisição bem sucedida',
  400: 'Bad Request - A requisição possui sintaxe inválida ou não pode ser processada pelo servidor.',
  401: 'Unauthorized - A requisição requer autenticação do usuário ou a autenticação falhou.',
  403: 'Forbidden - O servidor entende a requisição, mas se recusa a autorizá-la.',
  404: 'Not Found - O recurso solicitado não foi encontrado no servidor.',
  500: 'Internal Server Error - Ocorreu um erro no sistema, por favor, tente novamente mais tarde.',
  502: 'Bad Gateway - O servidor, agindo como um gateway ou proxy, recebeu uma resposta inválida do servidor upstream.',
  503: 'Service Unavailable - O servidor não está disponível no momento devido a sobrecarga ou manutenção.',
  default: 'Erro desconhecido',
};

const helpers: IHelpers = {
  statusCodeMessage(status: keyof typeof statusMessages) {
    return statusMessages[status] || statusMessages.default;
  },
};

export default helpers;
