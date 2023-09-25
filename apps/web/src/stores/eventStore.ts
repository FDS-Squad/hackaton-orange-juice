import { defineStore } from 'pinia';
import { useMainStore } from './mainStore';
import dayjs from 'dayjs';
import h$ from '@/utils/helpers';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(customParseFormat);
dayjs.extend(isBetween);

interface IEventStore {
  eventList: IEvent[];
  query: string;
}

export interface IEvent {
  id?: number;
  title: string;
  city: string;
  state: string;
  category: string;
  start_date: string;
  end_date: string;
  locationType: string;
  price: string;
  eventLink: string;
  imageUrl: string;
  description: string;
}

export const useEventStore = defineStore('event-store', {
  state: (): IEventStore => ({
    eventList: [
      {
        id: 1,
        title: 'Locaweb php Community summit 23',
        city: 'São Paulo',
        state: 'SP',
        category: 'Congresso',
        start_date: '28/09/2023',
        end_date: '29/09/2023',
        locationType: 'both',
        price: 'paid',
        eventLink: 'https://php.locaweb.com.br/',
        imageUrl: 'https://images.sympla.com.br/648794403cc20.png',
        description:
          'O PHP Community Summit foi criado para estreitar o relacionamento com as comunidades de desenvolvedores e profissionais da tecnologia e aproximar o público de soluções, tendências e inovações sobre os principais assuntos relacionados a tecnologia, carreira e liderança. O evento está na sua 6ª edição e é organizado pela Locaweb em conjunto com a Comunidade PHPSP.',
      },
      {
        id: 2,
        title: 'Codecon <Feature>',
        city: 'Florianópolis',
        state: 'SC',
        category: 'Workshop',
        start_date: '28/10/2023',
        end_date: '',
        locationType: 'in-person',
        price: 'paid',
        eventLink: 'https://www.codecon.dev/feature',
        imageUrl: 'https://images.sympla.com.br/64fde9ece9b37.png',
        description:
          'Um evento direcionado a pessoas desenvolvedoras em cargos sênior ou superiores que desejam crescimento profissional e sair da inércia, trazendo discussões para aprendizagem e inspiração em temas relacionados a equipe, processo, tecnologia e desenvolvimento pessoal. Mentorias, atividades e painéis com nomes de referência tanto da comunidade tech como fora dela, pois entendemos que o desenvolvimento profissional vai além dos conteúdos técnicos e ferramentas de gerenciamento, é necessário desenvolver habilidades e competências necessárias para liderar ou manter-se em evolução diante dos desafios atuais e das tendências futuras.',
      },
      {
        id: 3,
        title: 'Arkhademia - Treinamento Kanban Systems Improvement (KSI)',
        city: '',
        state: '',
        category: 'Curso',
        start_date: '21/10/2023',
        end_date: '28/10/2023',
        locationType: 'remote',
        price: 'paid',
        eventLink:
          'https://arkhademia.com.br/trilhas/kanban-systems-improvement-ksi/',
        imageUrl: 'https://images.sympla.com.br/64f793fc07eef-lg.png',
        description:
          '"Qual a melhor forma de gerenciar meu sistema Kanban no dia-a-dia?" Para conseguir responder esta pergunta e obter a certificação oficial de Kanban Management Professional, oferecemos o segundo módulo da trilha KMP.Esta aula foca no desenrolar e na operação diária de um sistema Kanban.Nela, mostramos como gerenciar e evoluir uma iniciativa Kanban ao longo do tempo e sem trauma.Você aprenderá a melhorar a agilidade com comprometimento assimétrico e cadências, além de entender as cadências recomendadas, como lidar com métricas e como estabelecer políticas.',
      },
    ] as IEvent[],
    query: '',
  }),

  actions: {
    async getAllEvents() {
      const { loadData } = useMainStore();

      loadData(['eventList']).then((resp) => {
        this.eventList = resp[0].data.eventList;
      });
    },
    async addNewEvent(event: IEvent) {
      const { postData } = useMainStore();

      postData(event).then(() => {
        console.log('enviou');
        this.getAllEvents();
      });
    },
    searchEvents(date: 'today' | 'tomorrow' | 'this-week' | 'this-month') {
      const today = dayjs();
      const tomorrow = dayjs().add(1, 'day');
      const nextWeek = dayjs().add(1, 'week');
      const nextMonth = dayjs().add(1, 'month');

      switch (date) {
        case 'today':
          this.eventList = this.eventList.filter((event) => {
            const eventDate = dayjs(event.start_date, 'DD/MM/YYYY');
            return eventDate.isSame(today, 'day');
          });
          console.log('today: ', today);
          break;
        case 'tomorrow':
          this.eventList = this.eventList.filter((event) => {
            const eventDate = dayjs(event.start_date, 'DD/MM/YYYY');
            return eventDate.isSame(tomorrow, 'day');
          });
          console.log('tomorrow: ', tomorrow);
          break;
        case 'this-week':
          this.eventList = this.eventList.filter((event) => {
            const eventDate = dayjs(event.start_date, 'DD/MM/YYYY');
            return eventDate.isBetween(today, nextWeek, null, '[]');
          });
          console.log('this week: ', nextWeek);
          break;
        case 'this-month':
          this.eventList = this.eventList.filter((event) => {
            const eventDate = dayjs(event.start_date, 'DD/MM/YYYY');
            return eventDate.isBetween(today, nextMonth, null, '[]');
          });
          console.log('this month: ', nextMonth);
          break;
        default:
          return;
      }
    },
  },
  getters: {
    filteredEvents: (state) => {
      const { eventList, query } = state;

      if (eventList) {
        if (query) {
          const filteredEvents = eventList.filter((event: IEvent) => {
            return (
              event.category.includes(query.toLowerCase()) ||
              event.title.toLowerCase().includes(query.toLowerCase()) ||
              event.city.toLowerCase().includes(query.toLowerCase())
            );
          });
          return filteredEvents.sort(h$.sortByDate);
        }

        return eventList.sort(h$.sortByDate);
      }
    },
  },
});
