import './App.css';
import List from './List';
import { useSelector } from 'react-redux';
import SelectBook from './SelectBook';
import Form from './Form';

function App() {
  // let p=useSelector()
  let selected = useSelector(stat => stat.selectBook)
  let selectedBookForEdit = useSelector(sta => sta.selectBookForEdit)
  return (
    <div className="App">
      <List />
      {selected && <SelectBook book={selected} />}
      {selectedBookForEdit && <Form code={selectedBookForEdit} />}
    </div>
  );
}

export default App;




