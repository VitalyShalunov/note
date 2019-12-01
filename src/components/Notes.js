import React from 'react';
import "./Notes.css"
import RectMarkDown from 'react-markdown'

class Note extends React.Component {
    render() {

        return (

            <div className="Notes-Note">
                <span className="Notes-Note-Delete" onClick={this.props.onDelete}>&times;</span>
               
                <RectMarkDown source= { this.props.text}/>
            </div>
        );
    }

}

class CreateNote extends React.Component {
    constructor(props){
        super(props);
        this.state={
            text:""
        };
        this.inputRef=React.createRef();
    }

onTextChange =(event) =>{
    this.setState({
        text: event.target.value
    })
};


onReset=()=>{
    this.setState({
        text: ""
    },
    ()=> {this.inputRef.current.focus();
    }
    );
}

onSave=()=>{
    if (this.state.text !=="")
    this.props.onCreate(this.state.text);
    this.onReset();
}


    render() {

        return (

          <div className="Notes-Create Note-Notes">
              <textarea className="Notes-Create-Input" ref={this.inputRef} value={this.state.text} onChange={this.onTextChange}></textarea>

              <div className="Notes-Create-Buttons"> 
              <button className="Notes-Create-Button" onClick={this.onSave}>Сохранить</button>
              <button className="Notes-Create-Button  Notes-Create-Button_reset" onClick={this.onReset}>Сброс</button>
              </div>
          </div>

        );
    }

}


class Notes extends React.Component {
    render() {

        return (
            <div className="Notes">
                <CreateNote onCreate={this.props.onCreate}/>
                <hr />

                {this.props.mynotes.map((text, index) => {
                    return <Note text={text}
                        key={index}
                        onDelete={() => this.props.onDelete(index)} />
                })}</div> //map - берет каждый элемент и отображает его в то, что нужно
        );
    }

}

export default Notes;