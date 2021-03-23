import React, { Component } from "react";
import {connect} from "react-redux" ;

import {setReduxTodos,getMoreReduxTodos,hasMoreReduxTodos} from "actions/todoActions";
import PostModal from 'components/PostModal/PostModal';
import Footer from "components/Footer/Footer";
import Todo from "components/Todo/Todo";
import fbService from "api/fbService";

import load from "assets/load.gif";
import noResults from "assets/noResults.jpg";
import tourImg from "assets/tourImg.jpg";

import './Todos.scss';

const limit = 14;

class Todos extends Component {

    state = {
        start:this.props.todos ? this.props.todos.length : 0 ,
        loading:false,
        isCreateModalOpen:false,
        titleValue:"",
        bodyValue:""
    }

    

    componentDidMount() {
      if(!this.props.todos){
        this.props.setReduxTodos(this.state.start,limit);  
      }
    }
    

  createPost = ()=>{
    const newPost = {
      title:this.state.titleValue,
      body:this.state.bodyValue,
      userId:1
    }
    fbService.todoService.createPost(newPost)

    .then(resJson =>{
      
      this.toggleCreateModal();
      this.props.history.push(`/todos/${resJson.id}`)
    })

  }

  

  removePost = (id)=>{
    const {start} = this.state
    fbService.todoService.removePost(id)
    .then(() => {
      fbService.todoService.getPosts(0,start !==0 ? start +limit : limit)
      .then(res=>{
        this.props.setReduxTodos(res);
      })
      
        
    })
    .catch(err =>{
      console.log(err);
    })

  }

  
  getMore =()=>{
    const newStart = this.state.start + limit + 1;
    this.setState({
      start:newStart,
      loading:true
    })
    // fbService.todoService.getPosts(newStart,newStart + limit)
    //   .then(resJson => {
    //     this.props.hasMoreReduxTodos(resJson.length <limit ? false : true)
    //     this.props.getMoreReduxTodos(resJson);
    //     this.setState({
    //       loading:false,
    //     })
    //   })
    
    this.props.getMoreReduxTodos(newStart,newStart + limit)
    .then(()=>{
      this.setState({
        loading:false,
      })
    })
  }

  toggleCreateModal = ()=>{
    this.setState(prev =>({ isCreateModalOpen : !prev.isCreateModalOpen}))
  }

  changeValue = (e)=>{
    const {name,value} = e.target;
    this.setState({
        [name]:value
    })
}

  render() {
    const {loading,isCreateModalOpen,titleValue,bodyValue} = this.state;
    const {todos ,hasMore} = this.props;

    if(!todos){
      return <div><img src ={load}></img></div>
    }

    if(!(todos.length > 0)){
      return <div><img src = {noResults}></img>No results</div>
    }
    
    return (
      <div className = "app-todos">
        <div className = "app-todos__banner">
          <img src = {tourImg}></img>
        </div>
        <div className = "app-todos__text">
          <h1>Enjoy your tour</h1>
          <span>On our site you can tour with already made tour projects or you can draw your own tour և enjoy the cozy corners of Armenia. Please indicate in which directio you would like to move, in what historical sights you would like to visit. Our tour specialists will gladly accompany you in all directions and help you discover Armenian warmth and the hospitable reality.</span>
        </div>
        <div className = "app-todos__createBtn">
          <button onClick={this.toggleCreateModal} className = "app-todos__btn__create"> CREATE POST </button>
        </div>
        <div className = "app-posts__container">
          {
            todos.map(todo =>{
              return <Todo 
                        key = {todo.id}
                        todo = {todo}
                        className = "app-posts__container__post"
                        isLink = {true}
                        remove = {()=>this.removePost(todo.id)}
                      />
            })
          }
        
        </div>
        {hasMore && <div>{loading ? <img src ={load}></img>: <button onClick = {this.getMore} disabled = {loading} className = "app-todos__btn-getMore">LOAD MORE</button>}</div>}

        <PostModal
          action = {this.createPost}
          bodyValue = {bodyValue}
          titleValue = {titleValue}
          changeValue = {this.changeValue}
          isOpen = {isCreateModalOpen}
          onClose = {this.toggleCreateModal}
          buttonTitle = "Create"

        />
        <div>
          <Footer/>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    todos:state.todosData.todos,
    hasMore:state.todosData.hasMore
  }
}

const mapDispatchToProps = {
  setReduxTodos,
  getMoreReduxTodos,
  hasMoreReduxTodos
}

export default connect(mapStateToProps,mapDispatchToProps) (Todos);



