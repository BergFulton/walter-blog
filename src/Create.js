import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('The Girl');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    fetch('https://my-json-server.typicode.com/BergFulton/walter-json/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPending(false);
      history.push('/');
    })
  }

   

    return (
      <div className="create">
        <h2 className="create">Add a new blog about Walter</h2>
        <form onSubmit = {handleSubmit}>
          <label>Blog Title</label>
          <input type="text" required value = { title } onChange = {(e) => setTitle(e.target.value)}/>
          <label>Blog Body</label>
          <textarea required value = { body } onChange = {(e) => setBody(e.target.value)}/>
          <label>Author</label>
          <select required value = { author } onChange = {(e) => setAuthor(e.target.value)}>
            <option value="The Girl">The Girl</option>
            <option value="The Boy">The Boy</option>
            <option value="Walter">The Dog</option>
          </select>
          { !isPending && <button>Add Blog</button> }
          { isPending && <button disabled>Adding Your Blog...sit and stay</button> }
        </form>
      </div>
      );
}
 
export default Create
