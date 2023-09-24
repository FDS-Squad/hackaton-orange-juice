import dayjs from 'dayjs';
import type { IEvent } from '@/stores/eventStore';

export interface IHelpers {
  states: Array<object>;
  statusCodeMessage: (status: keyof typeof statusMessages) => string;
  sortByDate: (...args: IEvent[]) => number;
}

const states = [
  { nome: 'Acre', sigla: 'AC' },
  { nome: 'Alagoas', sigla: 'AL' },
  { nome: 'Amapá', sigla: 'AP' },
  { nome: 'Amazonas', sigla: 'AM' },
  { nome: 'Bahia', sigla: 'BA' },
  { nome: 'Ceará', sigla: 'CE' },
  { nome: 'Distrito Federal', sigla: 'DF' },
  { nome: 'Espírito Santo', sigla: 'ES' },
  { nome: 'Goiás', sigla: 'GO' },
  { nome: 'Maranhão', sigla: 'MA' },
  { nome: 'Mato Grosso', sigla: 'MT' },
  { nome: 'Mato Grosso do Sul', sigla: 'MS' },
  { nome: 'Minas Gerais', sigla: 'MG' },
  { nome: 'Pará', sigla: 'PA' },
  { nome: 'Paraíba', sigla: 'PB' },
  { nome: 'Paraná', sigla: 'PR' },
  { nome: 'Pernambuco', sigla: 'PE' },
  { nome: 'Piauí', sigla: 'PI' },
  { nome: 'Rio de Janeiro', sigla: 'RJ' },
  { nome: 'Rio Grande do Norte', sigla: 'RN' },
  { nome: 'Rio Grande do Sul', sigla: 'RS' },
  { nome: 'Rondônia', sigla: 'RO' },
  { nome: 'Roraima', sigla: 'RR' },
  { nome: 'Santa Catarina', sigla: 'SC' },
  { nome: 'São Paulo', sigla: 'SP' },
  { nome: 'Sergipe', sigla: 'SE' },
  { nome: 'Tocantins', sigla: 'TO' },
];

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
  states,
  statusCodeMessage(status: keyof typeof statusMessages) {
    return statusMessages[status] || statusMessages.default;
  },
  sortByDate(a, b) {
    const dateA = dayjs(a.start_date);
    const dateB = dayjs(b.start_date);

    if (dateA.isBefore(dateB)) return -1;
    if (dateA.isAfter(dateB)) return 1;
    return 0;
  },
};

export default helpers;
