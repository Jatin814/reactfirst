import React from 'react';
import './index.css';

class Home extends React.Component {
  
  constructor() {
    super();
    this.state = {
      color: "white",
      data: [],
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( (res) => res.json())
    .then( (result) => {
      console.log(result);
      this.setState({data: result});
    })
    .catch((err) => {
      console.log(err);
    });
  }


  changeValue(){
    const { data } = this.state;
    const newData = data.map((item, index) => {
      if(index == 0){
        item.name = "kapil";
      }
      return item;
    });

    this.setState({data: newData});
  }


  render() {
    return(
      <div>
          <h2>Welcome to home page</h2>
          <button onClick={ ()=> this.changeValue() }>change</button>
          <table border="1" width="100%">
                <tr>
                    <td>Name</td>
                    <td>Phone</td>
                    <td>Username</td>
                    <td>Email</td>
                </tr>

                {
                  this.state.data.length > 0 ?
                  this.state.data.map( (item, index) => {
                    return(
                        <tr key={index}>
                            <td>{item.name} </td>
                            <td>{item.phone} </td>
                            <td>{item.username} </td>
                            <td>{item.email} </td>
                        </tr>
                    )
                }) : "No any data"
                }
            </table>
      </div>
    );
  }
}

export default Home;
