
import React, { useContext, useEffect, useState } from "react"
import { Context } from "../store/appContext"
import { useNavigate } from "react-router-dom";
export const Login = () => {

    const { store, actions } = useContext(Context);
    const [inputAgenda, setInputAgenda] = useState('');
    const [loginError, setLoginError] = useState(false);
    const [createError, setCreateError] = useState(false)

    const navigate = useNavigate()
    useEffect(() => {

        actions.getAgendas();

    }, [])

    const handleLogin = () => {

        const selectedAgenda = store.agenda.agendaList.filter((agenda) => { return agenda.slug === inputAgenda });

        if (selectedAgenda.length > 0) {
            setLoginError(false);
            actions.setAgenda(inputAgenda);

            navigate("/home")
            return;
        }
        setLoginError(true);

    }
    const handleCreateAgenda = () => {
        const selectedAgenda = store.agenda.agendaList.filter((agenda) => { return agenda.slug === inputAgenda });

        if (selectedAgenda.length === 0) {
            actions.createAgenda(inputAgenda);
            actions.setAgenda(inputAgenda);
            navigate("/home")
            return;
        }
        setCreateError(true)
    }

    return (<>

        <div className="h-100 w-100 d-flex justify-content-center align-items-center">

            <div className="card">
                <div className="card-header text-center">
                    <h1>Select your agenda</h1>
                </div>
                {loginError && (<div className="alert alert-danger" role="alert">
                    We could not find the agenda, try again or create a new one
                </div>)}
                {createError && (<div className="alert alert-danger" role="alert">
                    Oops! the agenda already Exists!
                </div>)}
                <div className="card-body text-center">
                    <div className="form-floating mb-3">
                        <input value={inputAgenda} onChange={e => setInputAgenda(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder="Hans" />
                        <label htmlFor="floatingInput">Agenda Name</label>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                        <button className="btn btn-primary" onClick={handleLogin}>Select Agenda</button>
                        <button className="btn btn-secondary" onClick={handleCreateAgenda}>Create A New One</button>
                    </div>
                </div>
            </div>


        </div>
    </>)
}