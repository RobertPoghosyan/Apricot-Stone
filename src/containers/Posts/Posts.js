import React, { Component } from "react";
import { connect } from "react-redux";

import Post from "components/Post/Post";
import Footer from "components/Footer/Footer";
import PostModal from "components/PostModal/PostModal";
import fbService from "api/fbService";
import {
  setReduxPosts,
  getMoreReduxPosts,
  hasMoreReduxPosts,
  postLimit as limit,
} from "actions/postActions";

import load from "assets/load.gif";
import noResults from "assets/noResults.jpg";
import postImg from "assets/postImg.jpg";

import "./Posts.scss";

export class Posts extends Component {
  state = {
    start: this.props.posts ? this.props.posts.length : 0,
    loading: false,
    isCreateModalOpen: false,
    titleValue: "",
    bodyValue: "",
  };

  componentDidMount() {
    if (!this.props.posts) {
      this.props.setReduxPosts(this.state.start, limit);
    }
  }

  createPost = () => {
    const newPost = {
      title: this.state.titleValue,
      body: this.state.bodyValue,
      userId: 1,
    };
    fbService.postsService
      .createPost(newPost)

      .then((resJson) => {
        this.toggleCreateModal();
        this.props.history.push(`/posts/${resJson.id}`);
      });
  };

  removePost = async (id) => {
    const { start } = this.state;
    await fbService.postsService.removePost(id);
    this.props.setReduxPosts(0, start + limit);
  };

  getMore = () => {
    const newStart = this.state.start + limit + 1;
    this.setState({
      start: newStart,
      loading: true,
    });

    this.props
      .getMoreReduxPosts(newStart, limit)

      .then(() => {
        this.setState({
          loading: false,
        });
      });
  };

  toggleCreateModal = () => {
    this.setState((prev) => ({ isCreateModalOpen: !prev.isCreateModalOpen }));
  };

  changeValue = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { loading, isCreateModalOpen, titleValue, bodyValue } = this.state;

    const { posts, postsHasMore } = this.props;

    if (!posts) {
      return (
        <div>
          <img src={load} alt="loading"></img>
        </div>
      );
    }

    if (!(posts.length > 0)) {
      return (
        <div>
          <img src={noResults} alt="noResults"></img>No results
        </div>
      );
    }

    return (
      <div className="app-posts">
        <div className="app-posts__about">
          <h1>Interesting Facts About Armenia</h1>
          <span>
            Our dear users leave their impressions and knowledge about Armenia
            on this page.Register on our site, become a member of our warm
            family,share your opinion
          </span>
        </div>
        <div className="app-posts__img">
          <img src={postImg} alt="post"></img>
        </div>
        <div className="app-posts__createBtn">
          <button
            onClick={this.toggleCreateModal}
            className="app-posts__btn__create"
          >
            {" "}
            CREATE POST{" "}
          </button>
        </div>
        <div className="app-posts__container">
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
                className="app-posts__container__post"
                isLink={true}
                remove={() => this.removePost(post.id)}
              />
            );
          })}
        </div>
        {postsHasMore && (
          <div>
            {loading ? (
              <img src={load} alt="load"></img>
            ) : (
              <button
                onClick={this.getMore}
                disabled={loading}
                className="app-posts__btn-getMore"
              >
                LOAD MORE
              </button>
            )}
          </div>
        )}

        <PostModal
          action={this.createPost}
          bodyValue={bodyValue}
          titleValue={titleValue}
          changeValue={this.changeValue}
          isOpen={isCreateModalOpen}
          onClose={this.toggleCreateModal}
          buttonTitle="Create"
        />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.postsData.posts,
    postsHasMore: state.postsData.postsHasMore,
  };
};

const mapDispatchToProps = {
  setReduxPosts,
  getMoreReduxPosts,
  hasMoreReduxPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
