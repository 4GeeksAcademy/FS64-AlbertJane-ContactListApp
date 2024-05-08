import agendasDispatcher from "./dispatchers/agendasDispatcher";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agenda: {
				agendaList: [],
				selectedAgenda: ''
			}

		},
		actions: {
			getAgendas: async () => {

				const {agendas: agendaList} = await agendasDispatcher.getAll();
				
				const store = getStore();
				setStore({...store, agenda: {...store.agenda, agendaList}});
			},
			setAgenda: (selectedAgenda) => {
				const store = getStore();
				setStore({...store, agenda: {...store.agenda, selectedAgenda}})
			},
			createAgenda: async (slug) => {
				await agendasDispatcher.post(slug);
			}
		}
	};
};

export default getState;
