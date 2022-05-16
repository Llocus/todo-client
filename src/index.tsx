import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import { createServer, Model } from 'miragejs';
import App from './App';

createServer({
  models: {
    user: Model,
  },

  seeds(server) {
    server.db.loadData({
      users: [
        {
          "cpf": "04080757247",
          "name": "José Andrade",
          "email": "jose@test.com.br",
          "phone": "11987654321"
          },
          {
          "cpf": "77797584192",
          "name": "Manoel Silva",
          "email": "manoel@test.com.br",
          "phone": "11987654321"
          },
          {
          "cpf": "45486737688",
          "name": "Augusto Maier",
          "email": "augusto@test.com.br",
          "phone": "11987654321"
          }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/users', () => {
      return this.schema.all('user')
    })
  }
})


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);