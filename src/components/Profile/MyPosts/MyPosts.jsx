import { Field, reduxForm } from 'redux-form';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {maxLengthCreator, requiredField} from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/formsControls';

const AddPostForm = (props) => {
    return (
        <form className={classes.newPost} onSubmit={props.handleSubmit}>
            <div>
                <Field className={classes.textarea} component={Textarea} 
                    placeholder='Write a new post...' name='newPost'
                    validate={[requiredField, maxLengthCreator(10)]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
}

const AddPostReduxForm = reduxForm ({
    form: 'add-post'
})(AddPostForm)

const MyPosts = (props) => {
    
    let postsElements = props.posts.map((post) => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)

    const addNewPost = (formData) => {
        props.addPost(formData.newPost);
    }

    return (
        <div className={classes.posts}>
            <AddPostReduxForm {...props} onSubmit={addNewPost}/>
            <div className={classes.allPosts}>
                <div className={classes.header}>All posts</div>
                <div className={classes.post}>{postsElements}</div>
            </div>
        </div>
    );
}

export default MyPosts;