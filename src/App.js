import React from "react";
import { hot } from 'react-hot-loader/root';
import _ from 'lodash'
import Ads from './ads/index.jsx';
import Banner from './banner/banner.jsx';
import Modal from 'react-modal';
// import New from './new/new.jsx';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Home from './pages/home';
import About from './pages/about';
import Users from './pages/users';
import Button from './pages/button';
import New from './pages/new';
import Sale from './pages/sale';
import Grid from './pages/grid';
import SearchBar from './components/searchBar';

const load = () => new Promise((resolve, reject) => {
  setTimeout(reject, 1000, 'error');
});

class Loader extends React.Component {
  state = {
    data: null,
    error: null
  };

  componentDidMount = async () => {
    try {
      const data = await load();

      this.setState({ data });
    } catch (error) {
      this.setState({ error });
    }
  }

  render = () => {
    if (this.state.error) {
      throw this.state.error;
    }
    if (this.state.data) {
      return this.state.data;
    }
    return 'Данные скачиваются...';
  }
}

class App extends React.Component {
  state = {
    posts: [],
    error: null,
    modalOpened: false
  };

  componentDidMount = async () => {
    /**
     * Вопрос о async/await и о том, в чём смысл их использования относительно в промисам.
     */
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
    } catch (error) {
      console.warn(error);
    }
}

  componentDidCatch(error, info) {
    console.log(error, info);
    this.setState({ error });
  }

  handleToggleModal = () => {
    this.setState(({ modalOpened }) => ({ modalOpened: !modalOpened }));
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="row MyAwesomeComponent">
          </div>
        </div>
        <div>
          <nav>
            <span
              style={{
                color: 'black'
              }}
            >
              {this.state.error ? 'Произошла ошибка.' : <Loader />}
            </span>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/button">Button</Link>
              </li>
              <li>
                <Link to="/new">New</Link>
              </li>
              <li>
                <Link to="/sale">Sale</Link>
              </li>
              <li>
                <Link to="/search-bar">Search bar</Link>
              </li>
              <li>
                <Link to="/banner">Banner</Link>
              </li>
              <li>
                <Link to="/grid">Grid</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/grid">
              <Grid />
            </Route>
            <Route path="/banner">
              <Banner />
            </Route>
            <Route path="/search-bar">
              <div
                style={{
                  width: '100%',
                  height: '300px',
                  backgroundColor: 'purple',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <SearchBar
                  action="/search"
                  onLoaded={(error, posts) => {
                    if (error) {
                      this.setState({ error });
                      return;
                    }

                    this.setState({ posts });
                  }}
                />
              </div>
            </Route>
            <Route path="/sale">
              <Sale />
            </Route>
            <Route path="/new">
              <New />
            </Route>
            <Route path="/button">
              <Button />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <button
            onClick={this.handleToggleModal}
          >
            Открыть
          </button>
          <Modal
            isOpen={this.state.modalOpened}
            onRequestClose={this.handleToggleModal}
          >
            Modal
          </Modal>
        </div>
      </BrowserRouter>
    );
  }

}

export default hot(App);
