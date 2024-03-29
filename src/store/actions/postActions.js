import {ADD_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED} from '../types';
import {DB} from '../../../db';
import * as FileSystem from 'expo-file-system'

export const loadPosts = () => {
    return async dispatch => {
        const posts = await DB.getPosts()
        dispatch({
            type: LOAD_POSTS,
            payload: posts
        })
    }
}
export const toggleBooked = (post) => async (dispatch) => {
    await DB.updatePost(post)
    return dispatch({
        type: TOGGLE_BOOKED,
        payload: post.id
    })
}
export const removePost = (id) => async (dispatch) => {
    await DB.removePost(id)
    return dispatch({
        type: REMOVE_POST,
        payload: id
    })
}

export const addPost = (post) => async (dispatch) => {
    const fileName = post.img.split('/').pop()
    const newPath = FileSystem.documentDirectory + fileName
    try {
        await FileSystem.moveAsync({
            to: newPath,
            from: post.img
        })
    } catch (err) {
        console.log(err)
    }

    const payload = {...post, img: newPath}
    payload.id = await DB.createPost(payload)

    post.id = Date.now().toString()
    dispatch({
        type: ADD_POST,
        payload
    })
}
