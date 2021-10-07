import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPostList } from '../../store/posts/actions';
import { getPostsSelector } from '../../store/posts/selectors';

const Home = () => {
  const postList = useSelector(getPostsSelector);
  const [value, setValue] = useState('');
  const [posts, setPosts] = useState(postList);
  // isOptionsVisible used to check the options box visibility
  const [isOptionsVisible, setOptionsVisibility] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostList());
  }, [dispatch]);

  const toggleDropdown = () => {
    if (!isOptionsVisible) {
      setPosts(postList);
    }
    setOptionsVisibility(!isOptionsVisible);
  };

  /**
   * To filter the list of items by search value
   * @param event
   */
  const onSearch = (event: any) => {
    const value = event.target.value;
    const posts =
      postList &&
      postList.filter((post: any) => {
        return post.title.toLowerCase().includes(value);
      });
    setPosts(posts);
  };

  /**
   * This method triggered after user select any option and hide option box
   * @param value
   */
  const selectValue = (value: any) => {
    setValue(value);
    setOptionsVisibility(false);
  };

  const placeholder = 'Choose any post...';

  return (
    <div>
      <div>
        <div className="bg-white col-lg-6 col-md-8 col-sm-12 col-xl-4 mt-5 mx-auto row wrapper-dropdown">
          <label>Post title</label>
          {!isOptionsVisible ? (
            <span className="form-control" onClick={toggleDropdown}>
              {value ? (
                <span className="align-bottom">{value}</span>
              ) : (
                <span className="placeholder pt-1">{placeholder} </span>
              )}
            </span>
          ) : (
            <input
              type="text"
              className="form-control shadow-none"
              placeholder={placeholder}
              onChange={onSearch}
              autoFocus
            ></input>
          )}
          {isOptionsVisible ? (
            <ul className="dropdown">
              {posts &&
                posts.map((post: any) => {
                  return (
                    <li
                      className={`${value === post.title ? 'selected' : ''}`}
                      onClick={() => selectValue(post.title)}
                      key={post.id}
                    >
                      {post.title}
                    </li>
                  );
                })}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
