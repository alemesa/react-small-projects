import React from 'react';
import image from '../images/cloud-upload-download-data-transfer.svg';
import Collapsible from './Collapsible';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      contacts: []
    };
  }

  //   localStorage.setItem('myCat', 'Tom');
  //   var cat = localStorage.getItem("myCat");
  //   localStorage.removeItem("myCat");

  //Before mounting
  componentWillMount() {
    let localContacts = localStorage.getItem('contacts');
    if (localContacts) {
      this.setState({
        contacts: JSON.parse(localContacts),
        isLoading: false
      });
    }
  }

  //After Mounting
  componentDidMount() {
    // Using date to update every 2 minutes
    let date = localStorage.getItem('contactsDate'); //on local storage
    let contactsDate = date && new Date(parseInt(date));
    console.log(contactsDate);
    let now = Date.now(); // right now

    let dataAge = Math.round((now - contactsDate) / (1000 * 60)); // difference in minutes

    let tooOld = dataAge >= 2;
    console.log(`Difference in minutes: ${dataAge}`);

    if (tooOld) {
      this.fetchData();
      console.log('Fetching from API');
    } else {
      console.log('Using data from localStorage');
    }
  }

  // Before rendering with new props
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('contacts', JSON.stringify(nextState.contacts));
    localStorage.setItem('contactsDate', Date.now());
  }

  fetchData() {
    this.setState({ isLoading: true, contacts: [] });

    fetch('https://randomuser.me/api/?results=10&nat=us,dk,fr,gb')
      .then(response => response.json())
      .then(parsedJSON =>
        parsedJSON.results.map(user => ({
          name: `${user.name.first} ${user.name.last} (${user.nat})`,
          username: `${user.login.username}`,
          email: `${user.email}`,
          location: `${user.location.state}, ${user.location.city}`,
          picture: `${user.picture.thumbnail}`
        }))
      )
      .then(contacts =>
        this.setState({
          contacts: contacts,
          isLoading: false
        })
      )
      .catch(error => console.log('parsing failed', error));
  }

  render() {
    let { isLoading, contacts } = this.state;

    return (
      <div>
        <header>
          <img src={image} />
          <h1>
            Fetching Data{' '}
            <button
              className="btn btn-sm btn-danger"
              onClick={() => this.fetchData()}
            >
              Fetch now
            </button>
          </h1>
        </header>
        <div className={`content ${isLoading ? 'is-loading' : ''}`}>
          <div className="panel-group">
            {!isLoading && contacts.length > 0 ? (
              contacts.map(contact => {
                //Destructuring
                const { username, name, email, location, picture } = contact;

                return (
                  <Collapsible key={`${username}`} title={`${name}`}>
                    <p>
                      {email}
                      <br />
                      {location}
                      <br />
                      <img src={picture} />
                    </p>
                  </Collapsible>
                );
              })
            ) : null}
          </div>
          <div className="loader">
            <div className="icon" />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
