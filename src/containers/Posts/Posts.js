import React, { Component } from "react";
import {connect} from "react-redux" ;


import Post from "components/Post/Post";
import PostModal from 'components/PostModal/PostModal';
import service from "api/service";
import fbService from "api/fbService";
import {setReduxPosts,getMoreReduxPosts,hasMoreReduxPosts} from "actions/postActions";

import load from "assets/load.gif";
import noResults from "assets/noResults.jpg";
import postImg from "assets/postImg.jpg"

import './Posts.scss';
import Footer from "components/Footer/Footer";


const limit = 14;

class Posts extends Component {

  
  state = {
    start:this.props.posts ? this.props.posts.length : 0 ,
    loading:false,
    isCreateModalOpen:false,
    titleValue:"",
    bodyValue:""
  }

  

  componentDidMount() {
    
    if(!this.props.posts){
      this.props.setReduxPosts(this.state.start, limit);
      // fbService.postsService.getPosts()
      // .then(data => {
      //  // this.context.dispatch({ type:actionTypes.SET_POSTS, payload:{posts:data} })
      //  this.props.setReduxPosts(data);
                    
        
      // })
    }
  }
  

  updatePost = ()=>{
    service.updatePost(5,{title:'Updated Title'})
    .then(resJson => {
      const newPosts = this.state.posts.map(el => {
        if(el.id === resJson.id){
          return resJson;
        }
        return el;
      })

      this.setState ({
        posts:newPosts
      })

    })

  }

  createPost = ()=>{
    const newPost = {
      title:this.state.titleValue,
      body:this.state.bodyValue,
      userId:1
    }
    fbService.postsService.createPost(newPost)

    .then(resJson =>{
      this.toggleCreateModal();
      this.props.history.push(`/posts/${resJson.id}`)
    })

  }

  deletePost = (id)=>{
    service.deletePost(id)
    .then(() => {
      const afterDelPosts = this.state.posts.filter(el => {
        return el.id !== id;
      })
      this.setState ({
        posts:afterDelPosts
      })
        
    })
    .catch(err =>{
      console.log(err);
    })

  }

  removePost = (id)=>{
    const {start} = this.state
    fbService.postsService.removePost(id)
    .then(() => {
      fbService.postsService.getPosts(0,start !==0 ? start +limit : limit)
      .then(res=>{
        this.props.setReduxPosts(res);
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
    // fbService.postsService.getPosts(newStart,newStart + limit)
    //   .then(resJson => {
    //     this.props.hasMoreReduxPosts(resJson.length <limit ? false : true)
    //     this.props.getMoreReduxPosts(resJson);
    //     this.setState({
    //       loading:false,
    //     })
    //   })

    this.props.getMoreReduxPosts(newStart,newStart + limit)
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
    //const {state:{posts}} = this.context;
    const {posts ,hasMore} = this.props;

    if(!posts){
      return <div><img src ={load}></img></div>
    }

    if(!(posts.length > 0)){
      return <div><img src = {noResults}></img>No results</div>
    }
    
    return (
      <div className = "app-posts">
        <div className = "app-posts__about">
          <h1>Interesting Facts About Armenia</h1>
          <span>Our dear users leave their impressions and knowledge about Armenia on this page.Registr on our site, become a member of our warm family,share your opinion</span>
        </div>
        <div className = "app-posts__img">
          <img src = {postImg}></img>
        </div>
        <div className = "app-posts__createBtn">
          <button onClick={this.toggleCreateModal} className = "app-posts__btn__create"> CREATE POST </button>
        </div>
        <div className = "app-posts__container">
          
          {
            posts.map(post =>{
              return <Post 
                        key = {post.id}
                        post = {post}
                        className = "app-posts__container__post"
                        isLink = {true}
                        remove = {()=>this.removePost(post.id)}
                      />
            })
          }
        
        </div>
        {hasMore && <div>{loading ? <img src ={load}></img>: <button onClick = {this.getMore} disabled = {loading} className = "app-posts__btn-getMore">LOAD MORE</button>}</div>}

        
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
    posts:state.postsData.posts,
    hasMore:state.postsData.hasMore
  }
}

const mapDispatchToProps ={
  setReduxPosts,
  getMoreReduxPosts,
  hasMoreReduxPosts
}

export default connect(mapStateToProps,mapDispatchToProps) (Posts);
